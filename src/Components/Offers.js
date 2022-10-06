import React from "react";
import Oferta from "..//asset/offers2.jpg";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="hero min-h-screen bg-base-100 dark:bg-third-night-color dark:text-seventh-night-color">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Oferta}
          className="rounded-lg shadow-2xl w-fit size-imageoffers"
        />
        <div>
          <h2 className="text-3xl font-bold parpadea text-center">Oferta de último momento</h2>
          <h3 className="font-bold p-1 text-3xl text-fifth-color pt-1">
            EGIPTO - DUBAI
          </h3>
          <div className="badge badge-primary line-through font-bold margin-rigth py-2">$3600 
          </div>
          <div className="badge badge-primary font-bold">$3200</div>
          <div>
          <span className="badge margin-rigth bg-seventh-color rounded-box text-first-color font-bold" >15 DÍAS</span>
          <span className="badge margin-rigth bg-seventh-color rounded-box text-first-color font-bold">+18</span>
          <span className="badge margin-rigth bg-seventh-color rounded-box text-first-color font-bold">2 PERSONAS</span>  
          </div>  

          <div className="grid grid-flow-col gap-4 text-center auto-cols-max pt-4">
  <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    Días
  </div> 
  <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    Horas
  </div> 
  <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    Min.
  </div> 
  <div className="flex flex-col p-2 bg-third-color rounded-box text-second-color">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":39}}></span>
    </span>
    Seg.
  </div>
</div>                        
          <p className="py-6 text-base font-medium">
          ¿Está buscando un paquete a un precio increíblemente bajo? ¡En Travel N hemos ayudado a más de 1 
          millón de viajeros a ahorrar miles de dólares con nuestros paquetes con descuento!
          </p>
          <p className="py-6 text-base font-medium">
          Si lo que buscas es disfrutar de unas vacaciones que nunca olvidarás donde los lugares turísticos 
          son los protagonistas, aquí te ofrecemos Viajes a Egipto y Dubai para que explores todas las maravillas 
          de la civilización egipcia como Las Pirámides, la ciudadela y los templos famosos en Luxor y Aswan 
          navegando por el Nilo a bordo de un crucero. Incluyendo un viaje a la estupenda Dubai explorando sus 
          atracciones incluyendo un día increíble en el  desierto. Todo esto con guía en español. 
          ¡No te quedes por fuera y descúbrenos!
          </p>        
          <button className="btn btn-primary font-medium">Mas Info</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
