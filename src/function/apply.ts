export const myApply = function (ctx: any, ...arr: any[]) {
  let index = Symbol('key')
  ctx[index] = this
  let res = ctx[index](...arr)
  delete ctx[index]
  return res
}
