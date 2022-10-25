import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [ ],
  cart: JSON.parse(localStorage.getItem("cart")) || [ ],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1]
      }
    }
  

    default:
      return state;
  }
}
