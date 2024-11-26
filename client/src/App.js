import React from 'react';
// import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  // Adjust path if needed
// import DonateNow from './components/DonateNow/DonateNow'; // Adjust path if needed
import Home from './components/Home/Home'; // Adjust path if needed
import TakeAction from './components/TakeAction/TakeAction';
// import Mainthreaterart from './components/Mainthreaterart/Mainthreaterart';
// import Mainabout from './components/Mainabout/Mainabout'; // Adjust path accordingly
// import Whatwe from './components/Whatwe/Whatwe';
// import Whoweare from './components/Whoweare/Whoweare';
// import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/donate" element={<DonateNow />} />  */}
         <Route path="/" element={<TakeAction />} /> 
        {/* <Route path="/Menubar" element={<Menubar />} /> 
         <Route path="/Whatwe" element={<Whatwe/>} /> 
       <Route path="/Mainthreaterart" element={<Mainthreaterart/>} /> 
        <Route path="/Mainabout" element={<Mainabout />} /> 
        <Route path="/whatwe" element={<Whatwe />} />
         <Route path="/Whoweare" element={<Whoweare/>}/> */}
         {/* <Route path="/Home" element={<Home/>} />  */}
       
      </Routes>
    </Router>
  );
};

export default App;
