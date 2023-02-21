export const deepclone = function (obj: any, cache: Map<object, object> = new Map()) {
  const isObject = (obj: object) => typeof obj === 'object' && obj !== null
  if (isObject(obj)) {
    const cacheObj = cache.get(obj)
    if (cacheObj) {
      return cacheObj
    } else {
      const res: any = Array.isArray(obj) ? [] : {}
      cache.set(obj, res)
      for (const key in obj) {
        const value = obj[key]
        res[key] = isObject(value) ? deepclone(value, cache) : value
      }
      return res
    }
  } else {
    return obj
  }
}
