/**
 * Sentinel used internally to signal "remove this key from the result object".
 * Never leaks outside this module.
 */
const REMOVE = Symbol('remove');

/**
 * Detects Firestore FieldValue sentinels (serverTimestamp, arrayUnion, increment, …).
 * These objects must pass through untouched — sanitizing them would break them.
 *
 * Firebase v9 modular:  val._delegate._methodName === 'FieldValue.*'
 * Firebase v8 compat:   val._methodName            === 'FieldValue.*'
 */
function isFieldValue(val) {
  if (!val || typeof val !== 'object') return false;
  return (
    typeof val._methodName === 'string' ||
    (val._delegate && typeof val._delegate._methodName === 'string')
  );
}

/**
 * Recursively sanitizes a single value for Firestore compatibility:
 *
 *   undefined   → REMOVE (key dropped from parent object)
 *   null        → null
 *   boolean     → boolean
 *   string      → string
 *   finite num  → number    (NaN / Infinity → null)
 *   Date        → Date      (Firestore converts to Timestamp automatically)
 *   FieldValue  → FieldValue (sentinel, passed through as-is)
 *   function    → REMOVE
 *   Array       → Array     (nested arrays serialized to JSON string)
 *   Object      → Object    (recursed; undefined-valued keys dropped)
 */
function sanitizeValue(val) {
  if (val === undefined)        return REMOVE;
  if (val === null)             return null;

  switch (typeof val) {
    case 'boolean': return val;
    case 'string':  return val;
    case 'number':  return Number.isFinite(val) ? val : null;
    case 'function': return REMOVE;
  }

  if (val instanceof Date)  return val;
  if (isFieldValue(val))    return val;  // preserve Firestore sentinels

  if (Array.isArray(val)) {
    const out = [];
    for (const item of val) {
      if (Array.isArray(item)) {
        // ── Nested array ─────────────────────────────────────────────────────
        // Firestore does NOT support arrays inside arrays.
        // Serialize to a JSON string so the data is preserved and recoverable.
        out.push(JSON.stringify(item));
      } else {
        const s = sanitizeValue(item);
        // Keep null in arrays (it is a valid Firestore value).
        // Drop only items that resolved to the REMOVE sentinel (functions/undefined).
        out.push(s === REMOVE ? null : s);
      }
    }
    return out;
  }

  if (typeof val === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(val)) {
      const s = sanitizeValue(v);
      if (s !== REMOVE) out[k] = s;   // silently drop undefined / functions
    }
    return out;
  }

  // Fallback: anything exotic (Symbol, BigInt, …) → null
  return null;
}

/**
 * Sanitizes a plain document object before passing it to Firestore addDoc / setDoc / updateDoc.
 *
 * Guarantees:
 *   ✓ No nested arrays  (serialized to JSON strings)
 *   ✓ No undefined      (keys dropped)
 *   ✓ No functions      (keys dropped)
 *   ✓ No NaN / Infinity (replaced with null)
 *   ✓ Dates preserved
 *   ✓ FieldValue sentinels preserved (serverTimestamp, arrayUnion, …)
 *   ✓ clinicalData structure preserved (sections, items, etc.)
 *
 * @param {object} data - Plain object to sanitize
 * @returns {object}    - Firestore-safe copy
 */
export function sanitizeFirestoreData(data) {
  if (data === null || data === undefined) return {};
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw new TypeError('sanitizeFirestoreData: expected a plain object');
  }

  const out = {};
  for (const [k, v] of Object.entries(data)) {
    const s = sanitizeValue(v);
    if (s !== REMOVE) out[k] = s;
  }
  return out;
}
