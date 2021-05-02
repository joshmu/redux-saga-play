import { HIDE, SHOW } from "../actionTypes";

const initialState = true;
export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return true;
    case HIDE:
      return false;
    default:
      return state;
  }
};
