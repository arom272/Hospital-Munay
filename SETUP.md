# Munay — Instrucciones de Configuración

## 1. Crear proyecto Firebase

1. Ir a https://console.firebase.google.com/
2. Crear nuevo proyecto (ej: `munay-hospital`)
3. Activar **Authentication → Email/Password**
4. Crear base de datos **Firestore** (modo producción)
5. Ir a Configuración del proyecto → Tus apps → Web → Registrar app
6. Copiar las credenciales

## 2. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env
```

Editar `.env` con tus credenciales Firebase:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

## 3. Crear usuario administrador

En Firebase Console → Authentication → Users → Add user:
- Email: admin@munay.com
- Password: (elige una contraseña segura)

Luego en Firestore → Colección `users` → Agregar documento:
- Document ID: (el UID del usuario creado)
- Campo: `role` → `admin`

Para usuarios de solo lectura, usar `role: viewer`.

## 4. Reglas de Firestore

En Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 5. Instalar y ejecutar

```bash
npm install
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## 6. Build para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 7. Íconos PWA

Colocar los íconos en `public/icons/`:
- `icon-192.png` (192×192 px)
- `icon-512.png` (512×512 px)

Ver `public/icons/README.txt` para herramientas de generación.

## Estructura de Colecciones Firestore

| Colección  | Descripción                          |
|------------|--------------------------------------|
| `patients` | Registro de pacientes                |
| `surgeries`| Cirugías programadas                 |
| `therapies`| Sesiones de terapia                  |
| `users`    | Roles de acceso (admin/viewer)       |

## Módulos de la aplicación

- **Dashboard** — Resumen del día y métricas
- **Pacientes** — CRUD completo + historial + exportar
- **Agenda Quirúrgica** — Calendario FullCalendar con control de conflictos
- **Terapias** — Fonoaudiología, Psicología, Nutrición, etc.
