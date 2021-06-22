// instances属性，判断this
test('instance', () => {
  const myMock = jest.fn()
  const a = new myMock() // this指向a
  const b = {}
  const bound = myMock.bind(b)
  bound() // bind后调用，this指向b
  expect(myMock.mock.instances[0]).toBe(a)
  expect(myMock.mock.instances[1]).toBe(b)
})

// 测试函数的执行次数、this、参数、结果
// The function was called exactly once
// expect(someMockFunction.mock.calls.length).toBe(1)

// The first arg of the first call to the function was 'first arg'
// expect(someMockFunction.mock.calls[0][0]).toBe('first arg')

// The second arg of the first call to the function was 'second arg'
// expect(someMockFunction.mock.calls[0][1]).toBe('second arg')

// The return value of the first call to the function was 'return value'
// expect(someMockFunction.mock.results[0].value).toBe('return value')

// This function was instantiated exactly twice
// expect(someMockFunction.mock.instances.length).toBe(2)

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
// expect(someMockFunction.mock.instances[0].name).toEqual('test')

// mock函数返回值
const filterTestFn = jest.fn()
// Make the mock return `true` for the first call, and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)
