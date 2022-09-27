import React from "react";
import Banner from "../src/Components/Banner.js";
import NavBar from "../src/Components/NavBar.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer";
import CardContainer from "./Components/CardContainer.js";
import Carousel from "./Components/Carousel.js";
import Hero from "./Components/Hero.js";
// import Share from "./Components/Share.js";
import { ThemeProvider } from "./Components/ThemeContext.js";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Banner />
        <NavBar />
        <Home />
        <Hero />
        <Carousel />
        <CardContainer />
        {/* <Share /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}
