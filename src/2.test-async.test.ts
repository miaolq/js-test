// 测试异步代码 文档： https://jestjs.io/docs/asynchronous

const fetchData = cb => {
  setTimeout(() => {
    cb('peanut butter')
  }, 100)
}

//  回调
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter')
      done() // pass
    } catch (error) {
      done(error) // fail
    }
  }

  fetchData(callback)
})

const fetchPromise = () => {
  return Promise.resolve('peanut butter')
}

// Promise resolve
// 1. 记得return
// 2. 如果promise reject，没有进入then，则fail
// 3. 如果promise resolve的值不对，fail
test('the data is peanut butter', () => {
  return fetchPromise().then(data => {
    expect(data).toBe('peanut butter')
  })
})

const fetchReject = () => {
  return Promise.reject('error')
}
// promise reject
// 1. 加上expect.assertions(1)
// 2. 记得return
// 3. 同上
test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchReject().catch(e => expect(e).toMatch('error'))
})

// .resolves / .rejects
test('the data is peanut butter', () => {
  return expect(fetchPromise()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
  return expect(fetchReject()).rejects.toMatch('error')
})

// Async/Await
test('the data is peanut butter', async () => {
  await expect(fetchPromise()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  await expect(fetchReject()).rejects.toMatch('error')
})
