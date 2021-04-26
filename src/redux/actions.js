import { TYPES } from './actionTypes';

export const addItem = () => ({
  type: TYPES.ADD_ITEM,
  payload: Math.floor(Math.random() * 1000)
});

export const removeItem = () => ({
  type: TYPES.REMOVE_ITEM,
});

export const toggle = show =>
  show
    ? {
        type: TYPES.SHOW,
      }
    : {
        type: TYPES.HIDE,
      };
