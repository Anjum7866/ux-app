import React from 'react'
import './App.css'
import { Footer,  Possibility, WhatGPT3, Header } from './containers';
import { AboutUs,  Navbar, TddAproach } from './components';

const App = () => {
  return (
    <div className='App'>    
    <div className='gradient_bg'>
        <Navbar/>
        <Header/>
    </div>
    
        <WhatGPT3 />
        <TddAproach/>
        <Possibility />
        <AboutUs />
        <Footer />
       
    </div>
  )
}

export default App
