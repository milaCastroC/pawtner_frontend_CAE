export function formatTimeToHHmm(date: Date | string): string {
  const d = (typeof date === 'string') ? new Date(date) : date;
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
