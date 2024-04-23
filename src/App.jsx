import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './myComponent/Header.jsx'
import Banner from './myComponent/Banner.jsx'
import About_me from './myComponent/About_me.jsx'
import Project from './myComponent/Project.jsx'
import Contact from './myComponent/Contact.jsx'
import Footer from './myComponent/Footer.jsx'
function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <About_me/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
