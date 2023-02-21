import { _new } from '../../src/object/new'
import { test, expect } from '@jest/globals'

function myMath(a: number, b: number) {
  this.a = a
  this.b = b
  this.add = function () {
    return this.a + this.b
  }
}
function fun() {
  let a = _new(myMath, 1, 2)
  return a.add()
}

test('测试new', () => {
  expect(fun()).toBe(3)
})
