import { TYPES } from "../actionTypes";

const initialState = [];

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_ITEM:
      return [...state, action.payload];
    case TYPES.REMOVE_ITEM:
      return state.slice(0, -1);
    default:
      return state;
  }
};
