export const include = function (s: string, t: string) {
  return new RegExp(t).test(s)
}
