export function generateNumberScale(
  start: number,
  end: number,
  distance: number = 0.25
): { label: string; value: string }[] {
  const result: { label: string; value: string }[] = [];
  let currentValue = start;

  while (currentValue <= end) {
    const label = currentValue.toString();
    result.push({ label, value: label }); // Use key as both key and value
    currentValue += distance;
  }

  return result;
}