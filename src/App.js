import React from "react";
import Banner from "../src/Components/Banner.js";
import NavBar from "../src/Components/NavBar.js";
import Home from "./Components/Home.js";
import CardContainer from "./Components/CardContainer.js";
import Offers from "./Components/Offers.js";
import Carousel from "./Components/Carousel.js";
import Hero from "./Components/Hero.js";
import Reviews from "./Components/Reviews.js";
import { ThemeProvider } from "./Components/ThemeContext.js";
import Share from "./Components/Share.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer.js";
import CartProvider from "./reducer/cartContext.js";


export default function App() {
  return (
    <>
      <CartProvider>
      <ThemeProvider>
        <Banner />
        <NavBar />
        <Home />
        <Hero />
        <Carousel />
        <CardContainer />
        <Offers />
        <Reviews />
        <Share />
        <Footer/>
      </ThemeProvider>
      </CartProvider>
    </>
  );
}
