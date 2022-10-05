import { TYPES } from "../acciones/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto A", price: 500 },
    { id: 2, name: "Producto B", price: 200 },
    { id: 3, name: "Producto C", price: 350 },
    { id: 4, name: "Producto D", price: 300 },
    { id: 5, name: "Producto E", price: 400 },
    { id: 6, name: "Producto F", price: 470 },
    { id: 7, name: "Producto G", price: 600 },
    { id: 8, name: "Producto H", price: 450 },
    { id: 9, name: "Producto I", price: 380 },
    { id: 10, name: "Producto J", price: 250 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      console.log(itemToDelete);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
