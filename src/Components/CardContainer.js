import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CardContainer = () => {
  return (
    <div className="bg-base-200 dark:bg-fourth-color pt-10 pb-12">
      <h5 className="text-center text-4xl font-bold text-first-color dark:text-seventh-color pb-2">
        Recorré el mundo <FontAwesomeIcon icon={faPlaneDeparture} />
      </h5>
      <h3 className="text-center text-xl font-bold text-first-color dark:text-second-color mb-4">
        <FontAwesomeIcon icon={faLocationDot} className="text-second-color" />{" "}
        Tours más famosos
      </h3>
      <section className="container mx-auto md:grid-flow-col-dense md:items-center sm:flex-row justify-center md:justify-evenly md:gap-2 sm:gap-1 items-center grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mb-6 lg:gap-7">
        {/* {Card.map((Card) => (
          <Card key={Card.id} Card={Card} addToCart={addToCart} />
        ))} */}
      </section>
    </div>
  );
};

export default CardContainer;
