import { myFreeze } from '../../src/object/freeze'
import { test, expect } from '@jest/globals'

function fun() {
  let a = {
    name: '小明',
    age: '18',
  }

  myFreeze(a)
  try {
    a.name = '123'
  } catch (e) {
    throw new Error('freeze')
  }
}

test('测试freeze是否可以冻结对象', () => {
  expect(() => fun()).toThrow('freeze')
})
