import React from 'react'
import Banner from '../src/Components/Banner.js'
import NavBar from '../src/Components/NavBar.js'
import Home from './Components/Home.js'
import { ThemeProvider } from './Components/ThemeContext.js'
import './App.css'


export default function App() {
  return (
    <ThemeProvider>
      <Banner />
      <NavBar />
      <Home />
    </ThemeProvider>
  )
}