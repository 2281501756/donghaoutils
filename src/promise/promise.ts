enum State {
  pendding,
  fulfilled,
  rejected,
}

export class MyPromise<T> {
  private State: State
  private value: any
  private reason: any
  private onResolveCallbacks: (() => void)[]
  private onRejectCallbacks: (() => void)[]
  constructor(executor: (resolve: (value: T) => void, reject: (e: any) => void) => void) {
    this.State = State.pendding
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = []
    this.onRejectCallbacks = []

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      this.reject(err)
    }
  }
  resolve = (value: T) => {
    if (this.State === State.pendding) {
      this.State = State.fulfilled
    }
    this.value = value
    this.onResolveCallbacks.forEach((fn) => {
      fn()
    })
  }
  reject = (e: any) => {
    if (this.State === State.pendding) {
      this.State = State.pendding
    }
    this.reason = e
    this.onRejectCallbacks.forEach((fn) => {
      fn()
    })
  }
  then(onFulfilled: any, onRejected: (err: any) => void) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value: any) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.State === State.fulfilled) {
        setTimeout(() => {
          let x = onFulfilled(this.value)
          this.resolvePromise(promise2, x, resolve, reject)
        })
      }
      if (this.State === State.rejected) {
        setTimeout(() => {
          let x = onRejected(this.reason)
          this.resolvePromise(promise2, x, resolve, reject)
        })
      }
      if (this.State === State.pendding) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            let x = onFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          })
        })
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            let x = onRejected(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          })
        })
      }
    })
    return promise2
  }
  resolvePromise(
    promise2: MyPromise<any>,
    x: any,
    resolve: (value: any) => void,
    reject: (e?: any) => void
  ) {
    if (x === promise2) {
      return reject(new TypeError('不能return自己'))
    }
    if (x instanceof MyPromise) {
      x.then(
        (y: any) => {
          this.resolvePromise(promise2, y, resolve, reject)
        },
        () => {}
      )
    } else if (x != null && (typeof x === 'object' || typeof x === 'function')) {
      let then = x.then
      if (typeof then === 'function') {
        let callled = false
        try {
          then.call(
            x,
            (y: any) => {
              if (callled) return
              callled = true
              this.resolvePromise(promise2, y, resolve, reject)
            },
            (r: any) => {
              if (callled) return
              callled = true
              reject(r)
            }
          )
        } catch (e) {
          if (callled) return
          callled = true
          reject(e)
        }
      }
    } else {
      resolve(x)
    }
  }
}
