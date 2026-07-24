export function addWhiteSpaceToPrice(arg: string | number): string {
  return arg.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}
