import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStarHalf } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Card.css"




const Card = ({image, country, plan, reviews, duration, price,}) => {
  return (

    <div className="border shadow-sm bg-white ring-2 flex flex-col justify-start card-size" >
        <img className="overflow-hidden size-image" src={image} alt={image}/> 
        <div>

        <p className="m-1 text-gray-400">{country}</p>
        <h5 className="m-1 text-black">{plan}</h5>
        <div className="m-1 flex gap-6">
            <div>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400"/>
            </div>
            <p>{reviews} REVIEWS</p>
        </div>
        <div className="flex justify-between border-t-2 info-style">
        <span className="m-1 text-gray-400">{duration}</span><span className="text-green-500">USD${price}</span>
        </div>

        </div>  
        <button className="hover:btn-primary transition-all duration-1000 border btn-style h-20" >MÁS INFORMACIÓN
        </button>

         

    </div>

    
  )
}

export default Card