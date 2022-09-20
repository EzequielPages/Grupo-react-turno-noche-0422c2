import React from 'react'
import Banner from '../src/Components/Banner.js'
import NavBar from '../src/Components/NavBar.js'
import Home from './Components/Home.js'
import { ThemeProvider } from './Components/ThemeContext.js'
import './App.css'
import CardContainer from './Components/CardContainer.js'


export default function App() {
  return (
<<<<<<< HEAD
   <>
    <Banner />
    <NavBar />
    <Home />
    <CardContainer />
   </>
=======
    <>
      <ThemeProvider>
        <Banner />
        <NavBar />
        <Home />
      </ThemeProvider>
    </>
>>>>>>> dark-mode
  )
}