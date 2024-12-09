import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  // Adjust path if needed
import DonateNow from './components/DonateNow/DonateNow'; // Adjust path if needed
import Home from './components/Home/Home'; // Adjust path if needed
import TakeAction from './components/TakeAction/TakeAction';
import Menubar from './components/Menubar/Menubar';
import Mainthreaterart from './components/Mainthreaterart/Mainthreaterart';
import Mainabout from './components/Mainabout/Mainabout'; // Adjust path accordingly
import Whatwe from './components/Whatwe/Whatwe';
import Contact from './components/Contact/Contact';
import Mainwhoweare from './components/Mainwhoweare/Mainwhoweare';



const App = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateNow />} /> 
         <Route path="/takeaction" element={<TakeAction />} /> /
         <Route path="/Menubar" element={<Menubar />} /> 
        <Route path="/Mainthreaterart" element={<Mainthreaterart/>} /> 
        <Route path="/Mainabout" element={<Mainabout />} /> 
        <Route path="/whatwe" element={<Whatwe />} />
         <Route path="/Mainwhoweare" element={<Mainwhoweare/>}/> 
         <Route path="/Home" element={<Home/>} /> 
         <Route path="/" element={<Contact/>} />
         <Route path="/take-action" element={<TakeAction />} />

       
      </Routes>
    </Router>
  );
};

export default App;
