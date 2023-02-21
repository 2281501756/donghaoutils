export const myFreeze = <T extends object>(object: T) => {
  function freeze(i: string) {
    Object.defineProperty(object, i, {
      writable: false,
      configurable: false,
    })
  }
  for (const i in object) {
    if (object[i] instanceof Object) myFreeze(object[i] as object)
    else freeze(i)
  }
  Object.seal(object)
}
