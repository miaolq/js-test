// 执行测试前后的准备工作和清理工作

// 每个测试前后，重复执行
beforeEach(() => {
  // initializeCityDatabase()
})
afterEach(() => {
  // clearCityDatabase()
})

// 如果是异步的：如同第二课，callback用done。 promise记得return
beforeEach(() => {
  // return initializeCityDatabase()
})

// 只执行一次
beforeAll(() => {
  //  return initializeCityDatabase()
})
afterAll(() => {
  //  return clearCityDatabase()
})

// 作用域
// 以上代码块默认对本文件所有的test都生效， 可以将beforeEach 和 test放到describe块里，describe块里的beforeEach只对块里的test有效

// jest在执行文件中的test之前会先执行所有的describe

// 调试： test.only会忽略该文件中其他test，只执行此test。 调试是否其他test修改公共数据导致的问题
test.only('this will be the only test that runs', () => {
  expect(true).toBe(true)
})

test('this test will not run', () => {
  expect('A').toBe('A')
})
