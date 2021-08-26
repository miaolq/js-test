# @testing-library

@testing-library 站在用户的角度测试 UI 组件, 鼓励测试最终的效果,而不是测试实现细节。

# 核心 api

## 查询节点

- getBy\* : 查找一个，查到 0 个或多个报错
- queryBy\*: 查找一个，0 个返回 null,多个报错
- findBy\*: 查找一个，返回一个 promise，当查到一个时 resolve，当超时（1s）或多个时 reject
- getAllBy* queryAllBy* findAllBy\*
- findBy 是 getBy\* 和 waitFor 的结合

## 模拟用户行为

- fireEvent[eventName](node: HTMLElement, eventProperties: Object)
- userEvent
- findBy
- waitFor
- getNodeText

# React test library

- react-dom/test-utils

## 疑问

1. Use a testid if you have to, to make your intention to fall back to non-semantic queries clear and establish a stable API contract in the HTML.

## 参考

- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
