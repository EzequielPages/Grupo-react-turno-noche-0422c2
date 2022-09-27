import React from "react";
import Banner from "../src/Components/Banner.js";
import NavBar from "../src/Components/NavBar.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer";
import CardContainer from "./Components/CardContainer.js";
import { ThemeProvider } from "./Components/ThemeContext.js";
import "./App.css";
import Share from "./Components/Share.js";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Banner />
        <NavBar />
        <Home />
        <CardContainer />
        <Share />
        <Footer />
      </ThemeProvider>
    </>
  );
}
