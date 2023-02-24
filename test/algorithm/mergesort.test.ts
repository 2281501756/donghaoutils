import { mergesort } from '../../src/algorithm/mergesort'
import { test, expect } from '@jest/globals'

test('测试mergesort', () => {
  expect(mergesort([3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5])
})
