import { useReducer } from "react";
import axios from "axios";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer,} from "../reducer/shoppingReducer";
import Products from "..//Api/db.json";





const ProductsToCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
    const { products } = state;
      
    const addToCart = async (id) => {
      const sendPost = {
        method: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify()  
      }
  
      const res = await axios("http://localhost:5000/cart", sendPost),
        cartItems = await res.data;

      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
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
  