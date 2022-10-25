import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faStarHalf,} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
import NestedModal from "./CardModal";

const Card = ({product}) => {
  const {country , image , plan , duration , reviews , price , textDeploy , id}  = product
 
  return (
    <div className="border-2 border-first-color dark:border-first-night-color md:shadow-first-color md:shadow-md bg-seventh-color dark:bg-first-night-color flex flex-col card-size sm:rounded-3xl md:rounded-3xl zoomEfect cardRadius">
      <div className="containerAnimated">
        <img
          className="overflow-hidden size-image imageAnimated md:rounded-tl-3xl sm:rounded-3xl md:rounded-tr-3xl object-cover imgCardRadius"
          src={image}
          alt="ciudad"
        />
        <div className="overlayAnimated">
          <div className="textAnimated italic text-sm">
            <FontAwesomeIcon icon={faLocationDot} /> {textDeploy}
          </div>
        </div>
      </div>
      <div>
        <p className="m-2 text-first-color dark:text-second-color font-semibold">
          {country}
        </p>
        <h6 className="m-2 font-medium italic text-third-color dark:text-seventh-color">
          {plan}
        </h6>
        <div className="m-2 flex gap-6">
          <div>
            <FontAwesomeIcon icon={faStar} className="text-second-color" />
            <FontAwesomeIcon icon={faStar} className="text-second-color" />
            <FontAwesomeIcon icon={faStar} className="text-second-color" />
            <FontAwesomeIcon icon={faStar} className="text-second-color" />
            <FontAwesomeIcon icon={faStarHalf} className="text-second-color" />
          </div>
          <p className="text-first-color dark:text-seventh-color italic">
            {reviews} REVIEWS
          </p>
        </div>
        <div className="flex justify-between border-t-2 border-t-second-color info-style">
          <span className="m-1 text-first-color dark:text-seventh-color">
            {duration}
          </span>
          <span className="text-success">USD ${price}</span>
        </div>
      </div>
      <NestedModal destino={country} product={product}></NestedModal>      
    </div>
  );
};

export default Card;
