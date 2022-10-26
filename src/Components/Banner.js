import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-seventh-color text-fourth-color dark:bg-third-night-color dark:text-seventh-night-color font-bold underline-offset-1 p-1">
      <div className="flex space-x-2 place-content-center lg:text-base md:text-base sm:text-sm text-sm">
        <p>Obtené el 10%  en tu próximo viaje con este cupón</p>
        <a className="underline hover:text-first-color" href="link">
          ¡Click acá!
        </a>
      </div>
    </div>
  );
};

export default Banner;
