import { useState, useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'
import Header from './myComponent/Header.jsx'
import About_me from './myComponent/About_me.jsx'
import Project from './myComponent/Project.jsx'
import Contact from './myComponent/Contact.jsx'
import Footer from './myComponent/Footer.jsx'
import Preloader from './myComponent/Preloader.jsx';

// Import GSAP and ScrollTrigger
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
    {/* {isLoading ? (
        <Preloader />
      ) : (
        <>
      <Header/>
      <About_me/>
      <Project/>
      <Contact/>
      <Footer/>
      </>
    )} */}
    <div className={`App ${isLoading ? 'loading' : 'loaded'}`}>
      {isLoading && <Preloader />}
      <div className="content">
      <Header/>
      <About_me/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
