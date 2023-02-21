import { phone, phone1 } from '../../src/string/phone'
import { test, expect } from '@jest/globals'

test('测试手机', () => {
  expect(phone('15364891933')).toBe('153-6489-1933')
})

test('测试手机2', () => {
  expect(phone1('15364891933')).toBe('153-6489-1933')
})
