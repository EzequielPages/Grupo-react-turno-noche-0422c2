import React from 'react'
import Banner from '../src/Components/Banner.js'
import NavBar from '../src/Components/NavBar.js'
import Home from './Components/Home.js'
import './App.css'
import CardContainer from './Components/CardContainer.js'


export default function App() {
  return (
   <>
    <Banner />
    <NavBar />
    <Home />
    <CardContainer />
   </>
  )
}