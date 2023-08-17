import React from 'react'
import './App.css'
import { Footer,  Header, Training, Contact, Services } from './containers';
import { AboutUs,  Navbar} from './components';

const App = () => {
  return (
    <div className='App'>    
    <div className='gradient_bg'>
        <Navbar/>
        <Header/>
    </div>
        <AboutUs />
        <Services/>
        <Training />
        <Contact />
       
        <Footer />
       
    </div>
  )
}

export default App
