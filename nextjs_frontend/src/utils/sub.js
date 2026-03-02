/**
 * Math utility: subtract two numbers.
 *
 * Kept dependency-free and exported as an ES module to match typical Next.js usage.
 */

// PUBLIC_INTERFACE
export function sub(a, b) {
  /** Subtract b from a for numeric values. */
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("sub(a, b) expects both arguments to be valid numbers");
  }
  return a - b;
}
