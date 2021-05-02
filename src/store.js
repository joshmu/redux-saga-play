import { combineReducers, createStore } from 'redux'

// types
export const SHOW = 'SHOW'
export const HIDE = 'HIDE'
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

// initial state
const initialToggleState = true
const initialItemsState = [1,2,3]

// reducer
const toggleReducer = (state = initialToggleState, action) => {
  switch (action.type) {
    case SHOW: 
      return true
    case HIDE: 
      return false
    default:
      return state
  }
}

// reducer
const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case ADD: 
      return [...state, Math.floor(Math.random()*10)+1] 
    case REMOVE: 
      return state.slice(0, -1)
    default:
      return state
  }
}
export const store = createStore(combineReducers({
  toggle: toggleReducer,
  items: itemsReducer
}))
