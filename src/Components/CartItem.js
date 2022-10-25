import "./CartItem.css";
import { CartContext } from "../reducer/cartContext";
import { useContext } from "react";
import { TYPES } from "../actions/shoppingActions";

const CartItem = ({ data }) => {
  const [state, dispatch] = useContext(CartContext);

  const updateState = async () => {
    const PRODUCTS_URL = "http://localhost:5000/products",
      CART_URL = "http://localhost:5000/cart";

    const resProducts = await fetch(PRODUCTS_URL),
      resCart = await fetch(CART_URL);

    const productsList = await resProducts.json(),
      cartItems = await resCart.json();

    dispatch({ type: TYPES.READ_STATE, payload: [productsList, cartItems] });
  };

  const increaseCounter = async (product) => {
    console.log(product);

    const { id } = product;

    product.quantity++;

    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    };

    await fetch(`http://localhost:5000/cart/${id}`, options);

    updateState();
  };

  const decreaseCounter = async (product) => {
    console.log(product);

    const { id, quantity } = product;

    product.quantity--;

    if (quantity > 1) {
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      };

  
      await fetch(`http://localhost:5000/cart/${id}`, options);
  
      updateState();
    };
    return state
    }


  const deleteFromCart = async (id) => {
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };

    await fetch(`http://localhost:5000/cart/${id}`, options);

    updateState();
  };

  const { id, country, price, quantity, image } = data;

  let finalPrice = price * quantity;

  return (
    <div className="card-item flex p-2">
      <img className="rounded w-14 h-24 object-cover" src={image} alt="img" />
      <div className="flex flex-col justify-between ml-4 textSize">
        <h4 className="font-bold ">Tu viaje a: {country}</h4>
        <h5 className="text-third-color">Valor del Tour: ${price} </h5>
        <h5 className="text-third-color">Precio Total:</h5>
        <h5 className="text-third-color">
          {quantity} x $ {finalPrice}
        </h5>
      </div>
      <div className="btn-group btn-group-vertical gap-2">
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => deleteFromCart(id)}
        >
          Eliminar
        </button>
        <button
          className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color"
          onClick={() => increaseCounter(data)}
        >
          +
        </button>
        <button className="btn btn-sm dark:bg-third-night-color dark:text-seventh-night-color" onClick={() => decreaseCounter(data)}>
          -
        </button>
      </div>
    </div>
  );
};
export default CartItem;
