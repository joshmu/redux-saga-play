import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const initialState = [];

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.slice(0, -1);
    default:
      return state;
  }
};
