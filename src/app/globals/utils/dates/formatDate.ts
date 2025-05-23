export function formatDate(date: Date | string, format: string): string {
  const d = new Date(date);

  const map: { [key: string]: string } = {
    'dd': ('0' + d.getDate()).slice(-2),
    'mm': ('0' + (d.getMonth() + 1)).slice(-2),
    'yyyy': d.getFullYear().toString(),
    'yy': d.getFullYear().toString().slice(-2),
    'HH': ('0' + d.getHours()).slice(-2),
    'MM': ('0' + d.getMinutes()).slice(-2),
    'SS': ('0' + d.getSeconds()).slice(-2),
  };

  return format.replace(/dd|mm|yyyy|yy|HH|MM|SS/g, matched => map[matched]);
}
