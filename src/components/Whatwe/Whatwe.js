import React from 'react';
import Whatwedo from '../Whatwedo/Whatwedo';
import Program from '../Program/Program';
import Wherewework from '../Wherewework/Wherewework';
import LandingPage from '../LandingPage/LandingPage';
import SubscribeSection from '../JoinMovement/SubscribeSection';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';

const Whatwe = () => {
  return (
    <div>
      {/* Header Section */}
      

      {/* Core Sections */}
      <Navbar />
      <Whatwedo />
      <Program />
      <Wherewework />
      <LandingPage />
      

      {/* Footer Section */}
      <SubscribeSection />
      <Contact />
    </div>
  );
};

export default Whatwe;
