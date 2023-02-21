export const _new = function <T extends Function>(func: T, ...arr: any[]): any {
  let _newObj = Object.create(func.prototype)
  let res = func.apply(_newObj, arr)
  if (typeof res === 'object' || typeof res === 'function') {
    return res
  } else {
    return _newObj
  }
}
