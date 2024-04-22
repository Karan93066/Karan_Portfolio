import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './myComponent/Header.jsx'
import Banner from './myComponent/Banner.jsx'
import About_me from './myComponent/About_me.jsx'
function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <About_me/>
     <h1 className="text-7xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
