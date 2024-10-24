import React, { useState } from 'react';  
import './Filter.css';  
  
function FilterComponent() {  
    const [selectedFilters, setSelectedFilters] = useState([]);  
    const [checkboxState, setCheckboxState] = useState({  
        AI: false,  
        ML: false,  
        'Data Science': false,  
        Zoology: false,  
        'Deep Learning': false,  
        Accounts: false  
    });  
  
    const handleFilterChange = (value, checked) => {  
        if (checked) {  
            setSelectedFilters(prevFilters => [...prevFilters, value]);  
        } else {  
            setSelectedFilters(prevFilters => prevFilters.filter(filter => filter !== value));  
        }  
        setCheckboxState(prevState => ({ ...prevState, [value]: checked }));  
    };  
  
    const removeFilter = (filter) => {  
        setSelectedFilters(prevFilters => prevFilters.filter(f => f !== filter));  
        setCheckboxState(prevState => ({ ...prevState, [filter]: false }));  
    };  
  
    return (  
        <div className="filter-component filter-1">  
            <div className="selected-filters">  
                {selectedFilters.map(filter => (  
                    <span key={filter} className="filter-tag">  
                        {filter} <button onClick={() => removeFilter(filter)}>x</button>  
                    </span>  
                ))}  
            </div>  
            <div className="filters">  
                <div className="filter-category">  
                    <h5>Filters</h5>  
                    {Object.entries(checkboxState).map(([key, value]) => (  
                        <label key={key}>  
                            <input   
                                type="checkbox"   
                                checked={value}  
                                onChange={(e) => handleFilterChange(key, e.target.checked)}  
                            /> {key}  
                        </label>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
}  
  
export default FilterComponent;  
