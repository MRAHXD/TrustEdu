import React from 'react';  
import './App.css';
import FilterComponent from './Components/Filter.js'; 
import PricingFilter from './Components/pricingFilter.js';
 

function App() {  
  return (  
    <div className="App">  
       <div className='filter-1'>
        <FilterComponent/>
       </div>
       <div className='filter-2'>
        <PricingFilter/>
       </div>
       <div className='hero-section'></div>
    </div>  
  );  
}  

export default App;  
