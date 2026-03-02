/**
 * Math utility: add two numbers.
 *
 * Kept dependency-free and exported as an ES module to match typical Next.js usage.
 */

// PUBLIC_INTERFACE
export function add(a, b) {
  /** Add two numeric values. */
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("add(a, b) expects both arguments to be valid numbers");
  }
  return a + b;
}
