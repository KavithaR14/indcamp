import React from 'react'
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Details from '../Details/Details';
import Contact from '../Contact/Contact';
import SubscribeSection from '../JoinMovement/SubscribeSection';



function TakeAction() {
  return (
    <>      
            <Navbar />
            <Section />
            <ProjectsSection />
            <Details />
            <SubscribeSection />
            <Contact /> 
        
    </>
  )
}


export default TakeAction;