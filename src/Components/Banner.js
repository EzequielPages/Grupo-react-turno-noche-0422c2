import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-seventh-color text-fourth-color dark:bg-sixth-night-color dark:text-seventh-night-color font-bold underline-offset-1 p-1">
      <div className="flex space-x-3 place-content-center">
        <p>Obten el 10% en tu próximo Viaje con este cupon</p>
        <a className="underline" href="link">
          Click Here!
        </a>
      </div>
    </div>
  );
};

export default Banner;
