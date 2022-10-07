import React from "react";
import Card from "./Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot} from "@fortawesome/free-solid-svg-icons"

const CardContainer = () => {
  return (
    <div className="bg-base-200 dark:bg-fourth-color px-4 py-4">
      <h5 className="text-center text-4xl font-bold text-first-color dark:text-seventh-color pb-2">Recorré el mundo <FontAwesomeIcon icon={faPlaneDeparture}/></h5>
      <h3 className="text-center text-xl font-bold text-first-color dark:text-second-color mb-4"><FontAwesomeIcon icon={faLocationDot} className="text-second-color"/> Tours más famosos</h3>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 sm:gap-8">
            <Card
            id= "1"
            image = "/Media/Qatar.jpg"
            country = "QATAR"
            plan = "FIFA WORLD CUP 2022"
            duration = "21 DÍAS"
            reviews= "31"
            price= "5500"
            textDeploy="DOHA"
            />
            <Card
            id= "2"
            image = "/Media/Sudafrica.jpg"
            country = "SUDÁFRICA"
            plan = "CONOCÉ LA SABANA"
            duration = "9 DÍAS"
            reviews= "92"
            price= "1900"
            textDeploy="SABI SABI"
            />
            <Card 
            id= "3"
            image = "/Media/Cataratas.jpg"
            country = "ARGENTINA"
            plan = "VISITÁ LAS CATARATAS"
            duration = "7 DÍAS"
            reviews= "129"
            price= "790"
            textDeploy="MISIONES"
            />
            <Card 
            id= "4"
            image = "/Media/España.jpg"
            country = "ESPAÑA"
            plan = "TOUR POR BARCELONA"
            duration = "10 DÍAS"
            reviews= "101"
            price= "3900"
            textDeploy="SAGRADA FAMILIA"
            />
        </section>
    </div>
  )
}

// container mx-auto md:grid-flow-col-dense md:items-center sm:flex-row justify-center md:justify-evenly md:gap-2 sm:gap-1 items-center grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mb-6 lg:gap-7

export default CardContainer