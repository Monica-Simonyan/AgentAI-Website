import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBy from './components/TrustBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustBy />
      <Services />
      <OurWork/>
    </div>
  )
}

export default App
