import axios from "axios";
import { useContext, useEffect } from "react";
import { TYPES } from "../actions/shoppingActions";
import { CartContext } from "../reducer/cartContext";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useContext(CartContext)

  const { cart } = state;

  const updateState = async () => {
    const PRODUCTS_URL = "http://localhost:5000/products",
      CART_URL= "http://localhost:5000/cart";

    const resProducts = await axios.get(PRODUCTS_URL),
      resCart = await axios.get(CART_URL);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems] })
  }

  useEffect(() => {
    updateState()
    console.log(updateState)
  }, [])
  

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
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} addToCart={addToCart} />
        ))}
      </div>
      <button
        className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
        onClick={clearCart}>
        limpiar Carrito
      </button>
    </>
  );
};
export default ShoppingCart;
