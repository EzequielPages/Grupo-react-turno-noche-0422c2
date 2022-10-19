import { createContext, useEffect, useReducer } from "react";
import  {shoppingReducer, shoppingInitialState } from "./shoppingReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { cart, products } = state;
  
  useEffect(() => {
    console.log(cart)
  }, [cart, products]);



  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartProvider;
