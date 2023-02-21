import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
const __dirname = path.resolve()

let res = await inquirer.prompt([
  {
    type: 'input',
    name: 'DirName',
    message: '请输入文件夹名：',
  },
  {
    type: 'input',
    name: 'FileName',
    message: '请输入文件名：',
  },
])
const out_path = path.join(__dirname, './src/', res['DirName'])
const test_path = path.join(__dirname, './test/', res['DirName'])
console.log(out_path)
console.log(test_path)

if (!fs.existsSync(out_path) || !fs.existsSync(test_path)) {
  fs.mkdirSync(out_path)
  fs.mkdirSync(test_path)
}
const funTemplate = `
export const  = function () {

}
`
const testTemplate = `
import {  } from '../../src/${res['DirName']}/${res['FileName']}'
import { test, expect } from '@jest/globals'


test('测试', () => {

})

`
fs.writeFileSync(path.join(out_path, res['FileName'] + '.ts'), funTemplate)
fs.writeFileSync(path.join(test_path, res['FileName'] + '.ts'), testTemplate)
console.log('创建成功')
