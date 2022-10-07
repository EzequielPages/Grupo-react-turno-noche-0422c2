import React from "react";
import Oferta from "..//asset/offers2.jpg";
import "./Offers.css";
import CountdownTimer from "./CountdownTimer.js";

const Offers = () => {
  return (
    <div className="hero min-h-screen bg-base-100 dark:bg-third-night-color dark:text-seventh-night-color">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Oferta}
          className="rounded-lg shadow-2xl w-fit size-imageoffers"
          alt="EgiptoDubai"
        />
        <div> 
        <div className="offerStyle">
          <h2 className="text-4xl font-bold parpadea text-center">Oferta de último momento</h2>
        </div> 
          <CountdownTimer/>
          <h3 className="font-bold p-1 text-3xl text-fifth-color pt-1">
            EGIPTO - DUBAI
          </h3>
          <div className="badge color-badge2 line-through font-bold margin-rigth py-3 mr-2">$3600 
          </div>
          <div className="badge color-badge font-bold py-3 my-1">$3200</div>
          <div>
          <span className="badge margin-rigth mr-1 size-span-badge bg-seventh-color rounded-box text-first-color font-bold" >15 DÍAS</span>
          <span className="badge margin-rigth mr-1 size-span-badge bg-seventh-color rounded-box text-first-color font-bold">+18</span>
          <span className="badge margin-rigth size-span-badge bg-seventh-color rounded-box text-first-color font-bold">2 PERSONAS</span>  
          </div>                      
          <p className="py-6 text-base font-medium pb-1 text-justify">
          ¿Está buscando un paquete a un precio increíblemente bajo? ¡En Travel N hemos ayudado a más de 1 
          millón de viajeros a ahorrar miles de dólares con nuestros paquetes con descuento!
          </p>
          <p className="py-6 text-base font-medium pt-1 text-justify">
          Si lo que buscas es disfrutar de unas vacaciones que nunca olvidarás donde los lugares turísticos 
          son los protagonistas, aquí te ofrecemos Viajes a Egipto y Dubai para que explores todas las maravillas 
          de la civilización egipcia como Las Pirámides, la ciudadela y los templos famosos en Luxor y Aswan 
          navegando por el Nilo a bordo de un crucero. Incluyendo un viaje a la estupenda Dubai explorando sus 
          atracciones incluyendo un día increíble en el  desierto. Todo esto con guía en español. 
          ¡No te quedes por fuera y descúbrenos!
          </p>    
          <div className="text-center"> 
          <button className="btn btn-primary font-medium">Mas Info</button>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default Offers;