export const phone = function (s: string, format: string = '-') {
  return s.replace(/(?=(\d{4})+$)/g, format)
}

export const phone1 = function (s: string, format: string = '-') {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (i === 3 || i === 7) res += '-'
    res += s[i]
  }
return res
}
