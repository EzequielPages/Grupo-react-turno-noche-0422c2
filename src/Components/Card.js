import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = ({
  image,
  country,
  plan,
  reviews,
  duration,
  price,
  textDeploy,
}) => {
  return (
    <div className="border border-gray-600 shadow-sm bg-white flex flex-col justify-start card-size  md:bg-white-500 ">
      <div className="containerAnimated">
        <img
          className="overflow-hidden size-image imageAnimated"
          src={image}
          alt={image}
        />
        <div className="overlayAnimated">
          <div className="textAnimated italic text-sm">
            <FontAwesomeIcon icon={faLocationDot} /> {textDeploy}
          </div>
        </div>
      </div>
      <div>
        <p className="m-2 text-gray-400">{country}</p>
        <h6 className="m-2 font-medium italic text-black">{plan}</h6>
        <div className="m-2 flex gap-6">
          <div>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" />
          </div>
          <p>{reviews} REVIEWS</p>
        </div>
        <div className="flex justify-between border-t-2 info-style">
          <span className="m-1 text-gray-400">{duration}</span>
          <span className="text-green-600">USD${price}</span>
        </div>
      </div>
      <button className="hover:btn-primary transition-all duration-1000 border btn-style h-20 italic">
        MÁS INFORMACIÓN
      </button>
    </div>
  );
};

export default Card;
