import React from 'react'
import {
  render,
  screen,
  waitFor,
  getRoles,
  logRoles,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

test('should show login form', () => {
  function Login() {
    return <input aria-label="Username" type="text" name="Username" id="" />
  }
  render(<Login />)
  // 0个或多个会报错
  screen.getByLabelText('Username')
  // Events and assertions...
})

// screen.debug()

test('text match', () => {
  function A() {
    return <div>Hello</div>
  }
  render(<A />)
  screen.getByText('Hello')
  //   screen.debug(screen.getByText('Hello'))
  screen.getByText('llo', { exact: false })
  screen.getByText('hello', { exact: false })
  screen.getByText(/hello/i)
  screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'div' && content === 'Hello'
  })
})

test('user-event', () => {
  document.body.innerHTML = '<input />'
  const textbox = screen.getByRole('textbox')
  userEvent.type(textbox, 'hello')
  expect(textbox).toHaveValue('hello')
})

test('findBy', async () => {
  function Hi() {
    const [c, setC] = React.useState('click')
    return (
      <button
        onClick={() => {
          setC('Hi')
        }}
      >
        {c}
      </button>
    )
  }

  render(<Hi />)
  userEvent.click(screen.getByRole('button'))
  await screen.findByText(/hi/i)

  await waitFor(() => {
    screen.getByText(/hi/i)
  })
})

test('getRoles', () => {
  function App() {
    return (
      <div>
        <div>
          <form action="">
            <input type="text" />
            <select name="" id=""></select>
          </form>
        </div>
        <p>name</p>
      </div>
    )
  }
  const app = render(<App />)

  const roles = getRoles(app.container)
  //   console.log(roles)
  const log = logRoles(app.container)
  //   console.log(log)
  const a = getComputedStyle(app.container)
  //   console.log(a)
})
