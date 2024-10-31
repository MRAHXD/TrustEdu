import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Components/home.js';
import Courses from './courses.js';
import Community from './Components/community/community.js';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
    </Routes>     
    </Router>
  );
};

export default App;
