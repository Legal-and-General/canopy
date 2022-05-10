/**
 * This function creates an object composed of the object it is passed but
 * with the specified key removed. If the resultant object has no keys `null`
 * is returned
 *
 * @param obj -
 * The starting object
 * @param key -
 * The name of the key we want to remove
 *
 * @return The newly composed object without the specified key
 *
 * @example
 *     omit({ one: '1', two: '2' }, 'one')
 *     // returns `{ two: '2' }`
 */
export default function omit(
  obj: { [key: string]: unknown },
  key: string,
): { [key: string]: unknown } {
  if (!obj) {
    return obj;
  }

  const { [key]: _, ...newObj } = obj;

  if (Object.keys(newObj).length === 0) {
    return null;
  }

  return newObj;
}
