import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import Products from "./CardModal";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispach] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
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
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box-grid-responsive">
        {products.map((product) => (
          <Products key={products.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={clearCart}>limpiar Carrito</button>
    </>
  );
};
export default ShoppingCart;
