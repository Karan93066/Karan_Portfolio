import { useState, useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'
import Header from './myComponent/Header.jsx'
import About_me from './myComponent/About_me.jsx'
import Project from './myComponent/Project.jsx'
import Contact from './myComponent/Contact.jsx'
import Footer from './myComponent/Footer.jsx'

// Import GSAP and ScrollTrigger
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return (
    <>
      <Header/>
      <About_me/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
