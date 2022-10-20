import React, { useContext } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { TYPES } from "../actions/shoppingActions";
import { CartContext } from "../reducer/cartContext";

const CardContainer = () => {
 const [state, dispatch] = useContext(CartContext)

 const { products } = state

 const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };


  return (
    <div className="bg-base-200 dark:bg-fourth-color px-4 pt-4 pb-20">
      <h5 className="text-center text-4xl font-bold text-first-color dark:text-seventh-color pb-2">
        Recorré el mundo <FontAwesomeIcon icon={faPlaneDeparture} />
      </h5>
      <h3 className="text-center text-xl font-bold text-first-color dark:text-second-color mb-4">
        <FontAwesomeIcon icon={faLocationDot} className="text-second-color" />  Tours más famosos
      </h3>
      <div className="xl:mx-24 2xl:mx-48">
        <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 sm:gap-8 gap-y-4">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
                />
            ))}
        </section>
      </div>
    </div>
  );
};



export default CardContainer;
