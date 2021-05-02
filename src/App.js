import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { List } from './components/List'
import { Toggle } from './components/Toggle'
import { HIDE, SHOW, ADD, REMOVE } from './store'

export const App = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(state => state.toggle)
  const items = useSelector(state => state.items)

  const handleToggle = state => {
    dispatch({
      type: state ? HIDE : SHOW,
    })
  }

  const handleIncrement = () => {
    dispatch({
      type: ADD
    })
  }
  const handleDecrement = () => {
    dispatch({
      type: REMOVE
    })
  }

  return (
    <div className='App'>
      <h1>{toggle ? 'show' : 'hide'}</h1>
      <Toggle onClick={() => handleToggle(toggle)} />
      {toggle && (
        <>
          <div className='controls'>
            <button onClick={handleIncrement} className='control-item'>
              +
            </button>
            <button onClick={handleDecrement} className='control-item'>
              -
            </button>
          </div>
          <List items={items} />
        </>
      )}
    </div>
  )
}
