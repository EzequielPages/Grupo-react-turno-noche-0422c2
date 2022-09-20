import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <section className="flex flex-col justify-center items-center dark:bg-black dark:text-white">
      <Card
        image="/Media/Qatar.jpg"
        country="QATAR"
        plan="FIFA WORLD CUP 2022"
        duration="21 DÍAS"
        reviews="31"
        price="5500"
      />
      <Card
        image="/Media/Sudafrica.jpg"
        country="SUDÁFRICA"
        plan="CONOCÉ LA SABANA"
        duration="9 DÍAS"
        reviews="92"
        price="1900"
      />
      <Card
        image="/Media/Cataratas.jpg"
        country="ARGENTINA"
        plan="VISITÁ LAS CATARATAS"
        duration="7 DÍAS"
        reviews="129"
        price="790"
      />
      <Card
        image="/Media/España.jpg"
        country="ESPAÑA"
        plan="TOUR POR MADRID Y BARCELONA"
        duration="10 DÍAS"
        reviews="101"
        price="3900"
      />
    </section>
  )
}

export default CardContainer