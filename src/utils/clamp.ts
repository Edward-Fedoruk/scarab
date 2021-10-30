/**
 * Keeps number in range from min to max
 * @param min - minimal range value 
 * @param max - maximal range value
 * @param value - value to be in border
 * @returns value in range min and max 
 */
export const clamp = (
  min: number, 
  max: number, 
  value: number,
): number => Math.min(Math.max(value, min), max);
