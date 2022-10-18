import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer,
} from "../reducer/shoppingReducer";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button
        className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
        onClick={clearCart}>
        limpiar Carrito
      </button>
      <button onClick={ () => addToCart(2) }>Agregar</button>
    </>
  );
};
export default ShoppingCart;
