import React from "react";
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
  return (
    <div>
      <h2> Responsive </h2>
      <Carousel {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Carousel>
    </div>
  );
};
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default Carousel;
