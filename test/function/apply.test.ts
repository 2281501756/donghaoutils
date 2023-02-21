import { myApply } from '../../src/function/apply'
import { test, expect } from '@jest/globals'

declare global {
  interface Function {
    myApply(ctx: any, ...arr: any[]): any
  }
}

function add() {
  return this.a + this.b
}
Function.prototype.myApply = myApply

test('测试apply', () => {
  expect(add.myApply({ a: 1, b: 2 })).toBe(3)
})
