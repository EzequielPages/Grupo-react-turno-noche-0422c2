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

    const resProducts = await axios(PRODUCTS_URL),
      resCart = await axios(CART_URL);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems] })
  }

  useEffect(() => {
     updateState()
  },[cart])
  

  const addToCart = async (product) => {

    product.id = Date.now()

    console.log(product)

    const sendPost = {
      method: "POST",
      headers: {"content-type": "application/json"},
      data: JSON.stringify(product)  
    }
  

    await axios("http://localhost:5000/cart", sendPost)

    updateState()

  };

  return (
    <>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item}/>
        ))}
      </div>

    </>
  );
};
export default ShoppingCart;
