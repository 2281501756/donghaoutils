export const trim1 = function (s: string) {
  return s.replace(/^\s+|\s+$/g, '')
}

export const trim2 = function (s: string) {
  return s.replace(/^\s+(.*?)\s+$/, '$1')
}
