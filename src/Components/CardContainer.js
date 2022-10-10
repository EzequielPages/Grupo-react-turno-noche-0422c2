import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { shoppingInitialState } from "../reducer/shoppingReducer";

const CardContainer = () => {
  return (
    <div className="bg-base-200 dark:bg-fourth-color px-4 py-4">
      <h5 className="text-center text-4xl font-bold text-first-color dark:text-seventh-color pb-2">
        Recorré el mundo <FontAwesomeIcon icon={faPlaneDeparture} />
      </h5>
      <h3 className="text-center text-xl font-bold text-first-color dark:text-second-color mb-4">
        <FontAwesomeIcon icon={faLocationDot} className="text-second-color" />  Tours más famosos
      </h3>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 sm:gap-8">
           {shoppingInitialState.products.map((product) => (
            <Card
              key={product.id} 
              image={product.image} 
              country={product.country} 
              plan={product.plan}
              duration={product.duration}
              reviews={product.reviews}
              price={product.price}
              textDeploy={product.textDeploy}
              
              />
          ))}
      </section>
    </div>
  );
};

// addToCart={addToCart} 

export default CardContainer;
