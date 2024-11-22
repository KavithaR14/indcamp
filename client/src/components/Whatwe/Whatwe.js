import React from 'react';
// import Whatwedo from '../Whatwedo/Whatwedo';
import Program from '../Program/Program';
import WhereWeWork from '../Wherewework/Wherewework';
// import LandingPage from '../LandingPage/LandingPage';
import SubscribeSection from '../JoinMovement/SubscribeSection';
import Contact from '../Contact/Contact';
import LandingPage from '../components/LandingPage/LandingPage';
import Whatwedo from '../components/Whatwedo/Whatwedo';


function Whatwe() {
    return (
      <>
        <Whatwedo/>
        <Program/>
        <WhereWeWork/>
        <LandingPage/>
        <SubscribeSection/>
        <Contact/>
    </>
    )
}

export default Whatwe;