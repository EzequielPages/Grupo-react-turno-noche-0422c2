import React from "react";
import Slider from "react-slick";
import Santorini from "..//asset/santorini.jpg";
import Japon from "..//asset/japon.jpg";
import Madrid from "..//asset/madrid.jpg";
import Praga from "..//asset/praga.jpg";
import Cancun from "..//asset/cancun.jpg";
import Venecia from "..//asset/venecia.jpg";
import Argentina from "..//asset/argentina.jpg";
import Dubai from "..//asset/dubai.jpg";
import Qatar from "..//asset/qatar.jpg";
import Colombia from "..//asset/colombia.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="p-8 space-x-6 dark:bg-first-night-color dark:text-second-night-color">
      <h2 className="flex justify-center py-8 font-bold text-3xl">
        @TravelNViajes En Instagram
      </h2>
      <Slider {...settings}>
        <div className="pr-6">
          <img src={Santorini} alt="grecia" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Japon} alt="japon" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Madrid} alt="españa" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Praga} alt="republica checa" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Cancun} alt="mexico" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Venecia} alt="italia" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Argentina} alt="argentina" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Dubai} alt="arabia saudita" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Qatar} alt="qatar" className="rounded-lg" />
        </div>
        <div className="pr-6">
          <img src={Colombia} alt="colombia" className="rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
