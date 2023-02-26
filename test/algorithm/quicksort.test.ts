import { quicksort } from '../../src/algorithm/quicksort'
import { test, expect } from '@jest/globals'

test('测试quicksort', () => {
  expect(quicksort([9, 2, 4, 6, 1])).toEqual([1, 2, 4, 6, 9])
})
