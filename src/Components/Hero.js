import React from "react";
import Viaje from "..//asset/hero.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Viaje}
          className="rounded-lg shadow-2xl w-fit"
          alt="mapa con elementos"
        />
        <div>
          <h2 className="text-5xl font-bold">Quienes Somos</h2>
          <h3 className="font-bold p-1 text-2xl text-fifth-color">
            Responsabilidad Confianza y Seguridad Para Nuestros Clientes.
          </h3>
          <p className="py-6 text-base font-medium">
            TravelN es una agencia de viajes y turismo en Argentina, que se creó
            en la provincia de Bs As, en el año 2022 con la idea de organizar
            viajes de calidad a nivel nacional e internacional, teniendo como
            núcleo turístico la Argentina y una de las “Grandes ciudades mas
            importantes del mundo como lo es Bs As”. Desde entonces, nuestra
            empresa viene creciendo en forma vertiginosa teniendo como clave del
            éxito la total satisfacción de nuestros clientes, basado en la
            confianza de nuestro personal en el cumplimiento de las políticas y
            objetivos.
          </p>
          <button className="btn btn-primary font-medium">Mas Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
