import { trim1, trim2 } from '../../src/string/trim'
import { test, expect } from '@jest/globals'

test('测试trim1', () => {
  expect(trim1('  测试  ')).toBe('测试')
})
test('测试trim2', () => {
  expect(trim2('  测试2  ')).toBe('测试2')
})
