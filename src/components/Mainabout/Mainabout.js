import React from 'react'
import Navbar from '../Navbar/Navbar';



import SubscribeSection from '../JoinMovement/SubscribeSection.js';
import Contact from '../Contact/Contact.js'
import About from '../About/About.js';
import Objectives from '../Objectives/Objectives.js';




function Home() {
  return (
    <>
            <Navbar />
            <About />
            <Objectives/>
            
            <SubscribeSection />
            <Contact />
    </>
  )
}

export default Home