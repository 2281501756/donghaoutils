import { deepclone } from '../../src/object/deepclone'
import { test, expect } from '@jest/globals'

const a = {
  x: 1,
  y: {
    x: 2,
  },
  z: {
    s: 3,
  },
}

test('测试deepclone', () => {
  expect(deepclone(a)).toEqual(a)
})
