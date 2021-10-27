# js-test

javascript test practice. jest react

# 安装步骤

```bash
npm init;
npm i -D jest @types/jest;
npx jest --init;
npm i -D typescript ts-node;
npm i -D babel-jest @babel/core @babel/preset-env
npm i -D @babel/preset-typescript
npm i -D react react-test-renderer
```

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript', // 新增
    '@babel/preset-react',
  ],
}
```

## 注意
33
44
1. watch 模式

```bash
jest --watch #runs jest -o by default 相当于jest -o 对没有commit的文件做测试
jest --watchAll #runs all tests

```

2. jest 不会对 ts 做类型检测测试，要做类型检测测试使用 ts-jest 或 tsc

## 名称

- test not toBeNull toBeTruthy toBeUndefined toBeDefined toMatch toContain toThrow ...

1. toBe 使用的 Object.is 算法
2. toEqual 比较对象的值

## tip

- npm test -- -u => jest -u

## 疑问

1. jest --int: Automatically clear mock calls and instances between every test?
11
22