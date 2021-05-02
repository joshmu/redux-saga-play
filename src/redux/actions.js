import { ADD_ITEM, HIDE, REMOVE_ITEM, SHOW } from './actionTypes'

export const addItem = () => ({
  type: ADD_ITEM,
  payload: Math.floor(Math.random() * 1000),
})

export const removeItem = () => ({
  type: REMOVE_ITEM,
})

export const toggle = show =>
  show
    ? {
        type: SHOW,
      }
    : {
        type: HIDE,
      }
