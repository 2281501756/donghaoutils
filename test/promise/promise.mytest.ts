import { MyPromise } from '../../src/promise/promise'

let a = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve('出来了')
  }, 3000)
})
  .then(
    (res: any) => {
      console.log(res)
      return '嵌套'
    },
    () => {}
  )
  .then(
    (res: any) => {
      console.log(res)
      return new MyPromise((resolve) => {
        setTimeout(() => {
          resolve('最后')
        }, 2000)
      })
    },
    () => {}
  )
  .then(
    (res: any) => {
      console.log(res)
    },
    () => {}
  )
