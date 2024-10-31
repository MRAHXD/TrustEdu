import React from 'react';
import './home.css'; 

const LandingPage = () => { 
  return (
    <div className="LandingPage">
      <header>
        <h1>Unlock Your Potential With Us</h1>
        <p>Start achieving your learning goals today</p>
        <button className="cta">Get Started</button>
      </header>
      <div className="testimonial">
        <p>"The best learning platform to improve my skills. Teachers are very kind and friendly. Highly recommend."</p>
        <p>- Happy Student</p>
      </div>
    </div>
  );
};

export default LandingPage;
