import React from "react";
import Logo1 from "..//asset/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer p-8 bg-second-color text-fourth-color dark:bg-fifth-night-color dark:text-seventh-night-color">
      <div>
        <img src={Logo1} alt="logo" width={220} />
      </div>
      <div>
        <span className="footer-title">Info</span>
        <a href="#" className="link link-hover p-1">
          <FontAwesomeIcon icon={faPaperPlane} /> traveln@gmail.com
        </a>
        <a href="#" className="link link-hover p-1">
          <FontAwesomeIcon icon={faLocationDot} /> N°1080 Calle Rivadavia,
          Buenos Aires
        </a>
        <a href="#" className="link link-hover p-1">
          <FontAwesomeIcon icon={faPhone} /> 666 888 00000
        </a>
        <p>
          <FontAwesomeIcon icon={faPlaneDeparture} /> Agencia De Viajes Desde
          2022
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="#" className="link link-hover p-1">
          Sobre nosotros
        </a>
        <a href="#" className="link link-hover p-1">
          Contacto
        </a>
        <a href="#" className="link link-hover p-1">
          Paquetes
        </a>
        <a href="#" className="link link-hover p-1">
          Trabaja con nosotros
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="#" className="link link-hover p-1">
          Términos de uso
        </a>
        <a href="#" className="link link-hover p-1">
          Política de privacidad
        </a>
        <a href="#" className="link link-hover p-1">
          Cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
