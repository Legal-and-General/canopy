/**
 * Generates a random unique ID string suitable for use in component element IDs.
 * Using randomised IDs avoids conflicts when multiple Canopy-based applications
 * are embedded on the same page, since sequential counters would start from 0
 * in each application instance and cause element ID collisions.
 *
 * Two random base-36 strings are concatenated before slicing to ensure the
 * result is always 7 characters, even when a single `Math.random()` call
 * produces a very small value.
 *
 * @returns A random 7-character alphanumeric string.
 */
export function randomUniqueId(): string {
  const a = Math.random().toString(36).substring(2);
  const b = Math.random().toString(36).substring(2);

  return (a + b).padEnd(7, '0').substring(0, 7);
}
