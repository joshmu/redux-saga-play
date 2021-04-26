import { TYPES } from "../actionTypes";

const initialState = true;
export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SHOW:
      return true;
    case TYPES.HIDE:
      return false;
    default:
      return state;
  }
};
