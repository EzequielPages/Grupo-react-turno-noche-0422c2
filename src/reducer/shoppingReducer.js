import { TYPES } from "../actions/shoppingActions";
import QatarCard from "../asset/QatarCard.jpg";
import Cataratas from "../asset/Cataratas.jpg";
import España from "../asset/España.jpg";
import Sudafrica from "../asset/Sudafrica.jpg";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image: QatarCard,
      country: "QATAR",
      plan: "FIFA WORLD CUP 2022",
      duration: "21 DÍAS",
      reviews: "31",
      quantity: 2,
      price: 5500,
      textDeploy: "DOHA",
    },
    {
      id: 2,
      image: Sudafrica,
      country: "SUDÁFRICA",
      plan: "CONOCÉ LA SABANA",
      duration: "9 DÍAS",
      reviews: "92",
      quantity: 2,
      price: 1900,
      textDeploy: "SABI SABI",
    },
    {
      id: 3,
      image: Cataratas,
      country: "ARGENTINA",
      plan: "VISITÁ LAS CATARATAS",
      duration: "7 DÍAS",
      reviews: "129",
      quantity: 2,
      price: 790,
      textDeploy: "MISIONES",
    },
    {
      id: 4,
      image: España,
      country: "ESPAÑA",
      plan: "TOUR POR BARCELONA",
      duration: "10 DÍAS",
      reviews: "101",
      price: 3900,
      quantity: 2,
      textDeploy: " SAG. FAMILIA",
    },
  ],
  cart: [
    {
      id: 1,
      image: QatarCard,
      country: "QATAR",
      plan: "FIFA WORLD CUP 2022",
      duration: "21 DÍAS",
      reviews: "31",
      price: 5500,
      quantity: 2,
      textDeploy: "DOHA",
    },
    {
      id: 4,
      image: España,
      country: "ESPAÑA",
      plan: "TOUR POR BARCELONA",
      duration: "10 DÍAS",
      reviews: "101",
      price: 3900,
      quantity: 2,
      textDeploy: "SAGRADA FAMILIA",
    },
  ],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === newItem.id);
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
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

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
