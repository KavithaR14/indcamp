import React from 'react'
import Navbar from '../Navbar/Navbar';

import Hero from '../Hero/Hero.js';
import Stats from '../Stats/Stats.js';
import Container from '../Container/Container.js';
// import FlagshipProgram from '../FlagshipProgram/FlagshipProgram.js';
import Flagship from '../Flagship/Flagship.js';
import Mime from '../Mime/Mime.js';
import HelpAndKnowUs from '../HelpAndKnowUs/HelpAndKnowUs.js';

import SubscribeSection from '../JoinMovement/SubscribeSection.js';
import Contact from '../Contact/Contact.js';




function Home() {
  return (
    <>
            <Navbar />
            <Hero />
            <Stats />
            <Container /> 
            <Mime />
            <Flagship />
            <HelpAndKnowUs />
            <SubscribeSection />
            <Contact />
    </>
  )
}

export default Home