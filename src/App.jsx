import React, { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBy from './components/TrustBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
      {/* Cursor ring */}
      <div ref={outlineRef} className='fixed top-0 left-0 w-10 rounded-full border border-primary pointer-events-none z-[9999]'>
        {/* Custom cursor dot */}
        <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-nonen z-[9999]'>
          
      </div>
      </div>
    </div>
  )
}

export default App
