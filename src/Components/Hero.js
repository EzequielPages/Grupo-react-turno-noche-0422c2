import React from "react";
import Viaje from "..//asset/hero.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-third-night-color dark:text-seventh-night-color">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Viaje}
          className="rounded-lg shadow-2xl w-fit"
          alt="mapa con elementos"
        />
        <div>
          <h2 className="text-5xl font-bold">QUIÉNES SOMOS</h2>
          <h3 className="font-bold p-1 text-2xl text-fifth-color">
            Responsabilidad, confianza y seguridad para nuestros clientes.
          </h3>
          <p className="py-6 text-base font-medium">
            TravelN es una agencia de viajes y turismo en Argentina, que se creó
            en la provincia de Buenos Aires, en el año 2022 con la idea de organizar
            viajes de calidad a nivel nacional e internacional, teniendo como
            núcleo turístico la Argentina y algunas de las grandes ciudades más
            importantes del mundo como lo es Ciudad de Buenos Aires. Desde entonces, nuestra
            empresa viene creciendo en forma vertiginosa teniendo como clave del
            éxito la total satisfacción de nuestros clientes, basada en la
            confianza de nuestro personal en el cumplimiento de las políticas y
            objetivos.
          </p>
          <button className="btn btn-primary font-medium">Más Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
