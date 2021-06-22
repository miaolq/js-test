// snapshot将可序列化的对象（object array jsx），生成快照文件存储，后续变动将对比快照文件
// jest -u 更新快照文件 --updateSnapshot  --testNamePattern
// expect(tree).toMatchSnapshot(...);

const user = {
  name: 'li',
  age: 12,
}

test('basic example', () => {
  expect(user).toMatchSnapshot()
})

const date = {
  now: new Date(),
}

test('property matcher', () => {
  expect(date).toMatchSnapshot({
    now: expect.any(Date),
  })
})

// # Property Matchers

// expect(user).toMatchSnapshot({
//   createdAt: expect.any(Date),
//   id: expect.any(Number),
// })
