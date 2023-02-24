import { quicksort } from '../../src/algorithm/quicksort'
import { test, expect } from '@jest/globals'

test('测试quicksort', () => {
  expect(quicksort([4, 3, 1, 2, 5])).toEqual([1, 2, 3, 4, 5])
})
