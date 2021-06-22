// const React = require('react')
// const TestRenderer = require('react-test-renderer')
import React from 'react'
import TestRenderer, { act, create } from 'react-test-renderer'

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

function SubComponent(props) {
  return <p className="sub">{props.foo}</p>
}

const testRenderer = TestRenderer.create(<MyComponent />)
const json = testRenderer.toJSON()
const tree = testRenderer.toTree()
const testInstance = testRenderer.root

// testInstance.find(instance => {
//   console.dir(instance)
// })

test('SubComponent props foo should be bar', () => {
  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar')

  expect(testInstance.findByProps({ className: 'sub' }).children).toEqual([
    'bar',
  ])
})

test('create act', () => {
  let root
  act(() => {
    root = create(<SubComponent foo={1} />)
  })

  expect(root.toJSON()).toMatchSnapshot()

  act(() => {
    root.update(<SubComponent foo={2} />)
  })

  expect(root.toJSON()).toMatchSnapshot()
})
