import { useSelector } from 'react-redux'

import './App.css'
import { List } from './components/List'
import { Toggle } from './components/Toggle'
import { action } from './redux/store'
import {
  ADD_ITEM_SAGA,
  HIDE_SAGA,
  REMOVE_ITEM_SAGA,
  SHOW_SAGA,
} from './redux/actionTypes'
import { useState } from 'react'

function App() {
  const showing = useSelector(state => state.showHide)
  const items = useSelector(state => state.items)
  const [test, setTest] = useState(false)

  const addItem = () => action(ADD_ITEM_SAGA)
  const removeItem = () => action(REMOVE_ITEM_SAGA)
  const toggle = state => action(state ? HIDE_SAGA : SHOW_SAGA)
  const handleTest = () => setTest(true)

  return (
    <div className='App'>
      <Toggle onClick={() => toggle(showing)} totalItems={items.length} />
      <button onClick={handleTest}>test</button>
      {test && <h1>hello</h1>}
      {showing && (
        <>
          <div className='controls'>
            <button onClick={addItem} className='control-item'>
              add (1sec delay)
            </button>
            <button onClick={removeItem} className='control-item'>
              remove
            </button>
          </div>
          <List />
        </>
      )}
    </div>
  )
}

export default App
