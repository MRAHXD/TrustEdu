import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Components/home.js';
import Courses from './courses.js';
import ForumThread from './backend/Components/DiscussionForum.js';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<ForumThread />} />
    </Routes>     
    </Router>
  );
};

export default App;
