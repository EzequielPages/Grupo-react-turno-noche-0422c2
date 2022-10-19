import { createContext, useEffect, useReducer, useState } from "react";
import  {shoppingReducer, shoppingInitialState } from "./shoppingReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { cart, products } = state;
  const [itemQuantity, setItemQuantity] = useState()
  
  useEffect(() => {
    console.log(cart)
  }, [cart, products]);

  const itemsQuantity = () => {
    let quantity = 0
    for (const product of products){
        quantity = quantity + product.quantity
    }
    setItemQuantity(quantity);
    return quantity
  }

  const data = {
    itemsQuantity,
  }

  return (
    <CartContext.Provider value={[state, dispatch, data]}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartProvider;
