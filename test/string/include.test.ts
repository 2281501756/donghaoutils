import { include } from '../../src/string/include'
import { test, expect } from '@jest/globals'

test('测试include', () => {
  expect(include('123', '1')).toBe(true)
})
