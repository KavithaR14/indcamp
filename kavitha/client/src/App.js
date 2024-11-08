import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 // Adjust path if needed
import DonateNow from './components/DonateNow/DonateNow'; // Adjust path if needed
import Home from './components/Home/Home'; // Adjust path if needed
import TakeAction from './components/TakeAction/TakeAction';

const App = () => {
  return (
    <Router>
      {/* Navbar appears on every page */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/takeAction" element={<TakeAction />} />
      </Routes>
    </Router>
  );
};

export default App;
