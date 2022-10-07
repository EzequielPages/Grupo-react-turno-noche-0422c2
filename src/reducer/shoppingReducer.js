import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image: "/Media/Qatar.jpg",
      country: "QATAR",
      plan: "FIFA WORLD CUP 2022",
      duration: "21 DÍAS",
      reviews: "31",
      price: "5500",
      textDeploy: "DOHA",
    },
    {
      id: 2,
      image: "/Media/Sudafrica.jpg",
      country: "SUDÁFRICA",
      plan: "CONOCÉ LA SABANA",
      duration: "9 DÍAS",
      reviews: "92",
      price: "1900",
      textDeploy: "SABI SABI",
    },
    {
      id: 3,
      image: "/Media/Cataratas.jpg",
      country: "ARGENTINA",
      plan: "VISITÁ LAS CATARATAS",
      duration: "7 DÍAS",
      reviews: "129",
      price: "790",
      textDeploy: "MISIONES",
    },
    {
      id: 4,
      image: "/Media/España.jpg",
      country: "ESPAÑA",
      plan: "TOUR POR BARCELONA",
      duration: "10 DÍAS",
      reviews: "101",
      price: "3900",
      textDeploy: "SAGRADA FAMILIA",
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      console.log(action.payload);
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
