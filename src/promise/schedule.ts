export const schedule = function (urls: string[], max: number) {
  const result = new Array(urls.length),
    togethor = new Array(max).fill(null)
  let index = 0
  const promiseArray = togethor.map(() => {
    return new Promise((resolve, reject) => {
      function run() {
        console.log('run')
        if (index >= urls.length) {
          resolve(null)
          return
        }
        let t = index++
        fetch(urls[t])
          .then((res) => {
            console.log(res)
            result[t] = res.json()
            run()
          })
          .catch((e) => {
            result[t] = e
          })
      }
      run()
    })
  })
  console.log(togethor)
  return Promise.all(promiseArray).then(() => result)
}
