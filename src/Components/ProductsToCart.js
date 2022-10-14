import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import Products from "./Products";
import Card from "./Card";


const ProductsToCart = () => {
    const [state, dispach] = useReducer(shoppingReducer, shoppingInitialState);
  
    const { products, cart } = state;
  
    const addToCart = (id) => {
      console.log(id);
      dispach({ type: TYPES.ADD_TO_CART, payload: id });
    };
  
    const deleteFromCart = (id, all = false) => {
      console.log(id, all);
      if (all) {
        dispach({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      } else {
        dispach({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    };
  
    const clearCart = () => {
      dispach({ type: TYPES.CLEAR_CART });
    };
  
    return (
      <>
        <div className="box-grid-responsive">
        {products.map((product) => (
          <Products key={products.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      </>
    );
  };
  export default ProductsToCart;
  