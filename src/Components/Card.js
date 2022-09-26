import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStarHalf } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "./Card.css"




const Card = ({image, country, plan, reviews, duration, price, textDeploy,}) => {
  return (

    <div className="border-2 border-first-color dark:border-neutral border-gray-600 shadow-first-color shadow-md bg-seventh-color dark:bg-first-color flex flex-col justify-start card-size md:rounded-3xl zoomEfect" >
      <div className="containerAnimated">
        <img className="overflow-hidden size-image imageAnimated md:rounded-tl-3xl md:rounded-tr-3xl" src={image} alt={image}/> 
          <div class="overlayAnimated">
              <div class="textAnimated italic text-sm"><FontAwesomeIcon icon={faLocationDot}/> {textDeploy}</div>
          </div>
      </div>
          <div>

            <p className="m-2 text-first-color dark:text-second-color">{country}</p>
            <h6 className="m-2 font-medium italic text-third-color dark:text-seventh-color">{plan}</h6>
            <div className="m-2 flex gap-6">
              <div>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStarHalf} className="text-second-color"/>
              </div>
              <p className="text-first-color dark:text-seventh-color">{reviews} REVIEWS</p>
            </div>
            <div className="flex justify-between border-t-2 info-style">
              <span className="m-1 text-first-color dark:text-seventh-color">{duration}</span>
              <span className="text-success">USD${price}</span>
            </div>

        </div>  
          <button className="hover:btn-primary transition-all duration-1000 border btn-style h-20 italic text-first-color dark:text-seventh-color" >MÁS INFORMACIÓN
          </button>

         

    </div>

    
  )
}

export default Card