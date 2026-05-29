#!/usr/bin/env node
/**
 * setUserClaims.mjs — Sincroniza el rol de cada usuario hacia un custom claim
 * del token de Firebase Auth (request.auth.token.role), que es lo que usan las
 * reglas de Firestore y Storage para autorizar.
 *
 * Por qué: las reglas de Storage no pueden leer Firestore, así que la única vía
 * para aplicar roles en Storage es mediante custom claims. Este script también
 * acelera y abarata las reglas de Firestore (evita el get() por operación).
 *
 * Fuente de verdad: la colección `users/{uid}` en Firestore (campo `role`).
 * Roles válidos: admin | secretaria | medico | viewer
 *
 * ── Requisitos ─────────────────────────────────────────────────────────────
 *   npm install            # instala firebase-admin (devDependency)
 *   Una clave de cuenta de servicio (Service Account) del proyecto:
 *     Firebase Console → Configuración del proyecto → Cuentas de servicio
 *     → "Generar nueva clave privada" (descarga un JSON).
 *   NO subas ese JSON al repositorio.
 *
 * ── Uso ────────────────────────────────────────────────────────────────────
 *   # 1) Indicar la ruta de la clave de servicio:
 *   $env:GOOGLE_APPLICATION_CREDENTIALS="C:\ruta\serviceAccount.json"   # PowerShell
 *   export GOOGLE_APPLICATION_CREDENTIALS=/ruta/serviceAccount.json      # bash
 *
 *   # 2a) Sincronizar TODOS los usuarios desde Firestore:
 *   node scripts/setUserClaims.mjs --all
 *
 *   # 2b) Asignar un rol puntual a un usuario (por uid o email):
 *   node scripts/setUserClaims.mjs --email persona@ejemplo.com --role admin
 *   node scripts/setUserClaims.mjs --uid <UID> --role secretaria
 *
 *   # Añade --dry-run para ver qué haría sin escribir nada.
 *
 * Tras ejecutarlo, cada usuario debe renovar su token (volver a iniciar sesión,
 * o getIdToken(true)) para que el claim quede activo.
 */

import admin from 'firebase-admin';

const VALID_ROLES = ['admin', 'secretaria', 'medico', 'viewer'];

// ── Parseo simple de argumentos ──────────────────────────────────────────────
const args = process.argv.slice(2);
function getFlag(name) {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : null;
}
const opts = {
  all:    args.includes('--all'),
  dryRun: args.includes('--dry-run'),
  uid:    getFlag('uid'),
  email:  getFlag('email'),
  role:   getFlag('role'),
};

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error('✗ Falta GOOGLE_APPLICATION_CREDENTIALS (ruta al JSON de la cuenta de servicio).');
  process.exit(1);
}

admin.initializeApp({ credential: admin.credential.applicationDefault() });
const auth = admin.auth();
const db   = admin.firestore();

async function setRoleForUser(uid, role, label) {
  if (!VALID_ROLES.includes(role)) {
    console.warn(`  ⚠ ${label}: rol inválido "${role}" — omitido.`);
    return false;
  }
  const user = await auth.getUser(uid);
  const current = user.customClaims?.role ?? null;
  if (current === role) {
    console.log(`  = ${label}: ya tiene rol "${role}".`);
    return false;
  }
  if (opts.dryRun) {
    console.log(`  ~ ${label}: ${current ?? '(sin rol)'} → "${role}" [dry-run]`);
    return false;
  }
  // Preserva otros claims que pudieran existir.
  await auth.setCustomUserClaims(uid, { ...(user.customClaims ?? {}), role });
  console.log(`  ✓ ${label}: ${current ?? '(sin rol)'} → "${role}"`);
  return true;
}

async function runAll() {
  const snap = await db.collection('users').get();
  console.log(`Sincronizando ${snap.size} usuario(s) desde Firestore…`);
  let changed = 0;
  for (const doc of snap.docs) {
    const role = doc.data().role;
    if (!role) { console.warn(`  ⚠ ${doc.id}: sin campo "role" — omitido.`); continue; }
    if (await setRoleForUser(doc.id, role, doc.id)) changed++;
  }
  console.log(`Hecho. ${changed} cambio(s) aplicado(s).`);
}

async function runSingle() {
  if (!opts.role) { console.error('✗ Falta --role <rol>.'); process.exit(1); }
  let uid = opts.uid;
  let label = uid;
  if (!uid && opts.email) {
    const u = await auth.getUserByEmail(opts.email);
    uid = u.uid;
    label = `${opts.email} (${uid})`;
  }
  if (!uid) { console.error('✗ Indica --uid o --email.'); process.exit(1); }
  await setRoleForUser(uid, opts.role, label);
}

try {
  if (opts.all) await runAll();
  else await runSingle();
  process.exit(0);
} catch (err) {
  console.error('✗ Error:', err.message);
  process.exit(1);
}
