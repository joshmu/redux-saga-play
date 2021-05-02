import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('With React Testing Library', () => {
  const initialState = { showHide: true, items: [11, 22, 33] }
  const mockStore = configureStore()

  test('renders toggle button', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const toggleBtn = screen.getByText(/toggle/i)
    expect(toggleBtn).toBeInTheDocument()
  })

  test('renders add item button', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const addBtn = screen.getByText(/add/i)
    expect(addBtn).toBeInTheDocument()
  })

  test('renders remove item button', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const removeBtn = screen.getByText(/remove/i)
    expect(removeBtn).toBeInTheDocument()
  })

  test('click test button to reveal HELLO', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const testBtn = screen.getByRole('button', { name: /test/i })
    expect(screen.queryByText(/hello/i)).toBeFalsy()
    userEvent.click(testBtn)
    expect(screen.queryByText(/hello/i)).toBeTruthy()
  })
})
