import React from 'react';
// import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  // Adjust path if needed
// import DonateNow from './components/DonateNow/DonateNow'; // Adjust path if needed
// import Home from './components/Home/Home'; // Adjust path if needed
// import TakeAction from './components/TakeAction/TakeAction';
import Whatwe from './components/Whatwe/Whatwe';



const App = () => {
  return (
    <Router>
     <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/takeAction" element={<TakeAction />} />
        <Route path="/Menubar" element={<Menubar />} /> */}
        <Route path="/Whatwe" element={<Whatwe/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
