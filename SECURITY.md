# Seguridad — Modelo de roles y reglas

Este documento describe el modelo de autorización de la app Munay y, sobre todo,
**el orden de despliegue** de los cambios de seguridad para no dejar a ningún
usuario fuera de la aplicación en producción.

## Roles

| Rol          | Pacientes / Cirugías / Terapias | Documentos clínicos | Borrar documentos | Usuarios/roles | Finanzas |
|--------------|:-------------------------------:|:-------------------:|:-----------------:|:--------------:|:--------:|
| `admin`      | Crear/editar/borrar             | Crear/editar        | Sí                | Gestionar      | Sí       |
| `secretaria` | Crear/editar/borrar             | Crear/editar        | No                | —              | —        |
| `medico`     | Solo lectura                    | Crear/editar        | No                | —              | —        |
| `viewer`     | Solo lectura                    | Solo lectura        | No                | —              | —        |

Todos los usuarios autenticados pueden **leer** pacientes/documentos/agenda
(personal de la clínica). Lo que se restringe por rol es **escribir y borrar**.

## Dónde vive el rol

- **Fuente de verdad:** documento `users/{uid}` en Firestore, campo `role`.
- **Aplicación en reglas:** se replica a un **custom claim** del token de Auth
  (`request.auth.token.role`). Es la única vía para autorizar por rol en
  **Storage** (las reglas de Storage no pueden leer Firestore).

`AuthContext` y las reglas leen el rol del **claim** y, si aún no existe, hacen
*fallback* al documento de Firestore. Por eso el sistema sigue funcionando
mientras se completan los claims.

## Sincronizar roles → claims

```bash
# 1) Clave de cuenta de servicio (Firebase Console → Cuentas de servicio):
export GOOGLE_APPLICATION_CREDENTIALS=/ruta/serviceAccount.json   # bash
#   $env:GOOGLE_APPLICATION_CREDENTIALS="C:\ruta\serviceAccount.json"  # PowerShell

npm install              # instala firebase-admin

# 2) Sincronizar todos los usuarios desde Firestore:
npm run claims:sync
#   o asignar uno puntual:
node scripts/setUserClaims.mjs --email persona@ejemplo.com --role admin
```

Tras asignar claims, cada usuario debe **renovar su token** (cerrar y volver a
iniciar sesión) para que el rol quede activo.

> ⚠️ La clave de cuenta de servicio **no** debe subirse al repositorio.

## Orden de despliegue (importante)

Para evitar bloqueos en producción, desplegar en este orden:

1. **Código de la app** (este branch): `AuthContext` con lectura de claim +
   fallback. No rompe nada: sin claims se comporta como antes.
2. **Reglas de Firestore** (`firestore.rules`): ya soportan claim **con
   fallback** a Firestore → seguras de desplegar de inmediato.
   ```bash
   firebase deploy --only firestore:rules
   ```
3. **Asignar los claims** a todos los usuarios:
   ```bash
   npm run claims:sync
   ```
4. **Reglas de Storage** (`storage.rules`): usan enforcement **progresivo**
   (permiten al usuario sin claim, exigen rol al que ya lo tiene). Seguras de
   desplegar; el enforcement real empieza cuando el usuario tiene claim.
   ```bash
   firebase deploy --only storage
   ```
5. **Endurecimiento final (opcional, tras confirmar que todos tienen claim):**
   eliminar la rama `lacksRoleClaim()` de `storage.rules` y el ternario de
   fallback en `firestore.rules` (`userRole()`), dejando solo el claim como
   fuente. Así se elimina la ventana en la que un usuario sin claim tiene acceso
   de escritura.

## Notas

- Las claves `VITE_FIREBASE_*` del cliente son públicas por diseño; la seguridad
  real se aplica en estas reglas, no ocultando esas claves.
- Alta de usuarios nuevos: crear el documento `users/{uid}` con su `role` y
  ejecutar el script para asignarle el claim (o `--email ... --role ...`).
