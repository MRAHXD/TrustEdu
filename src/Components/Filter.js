import React from 'react';  
import './Filter.css';  
  
function FilterComponent({ selectedFilters, setSelectedFilters }) {  
    const categories = ['AI', 'ML', 'Data Science', 'Zoology', 'Deep Learning', 'Accounts'];  
  
    const handleFilterChange = (category, isChecked) => {  
        if (isChecked) {  
            setSelectedFilters([...selectedFilters, category]);  
        } else {  
            setSelectedFilters(selectedFilters.filter(f => f !== category));  
        }  
    };  
  
    const removeFilter = (filter) => {  
        setSelectedFilters(selectedFilters.filter(f => f !== filter));  
    };  
  
    return (  
        <div className="filter-component">  
            <div className="selected-filters">  
                {selectedFilters.map(filter => (  
                    <span key={filter} className="filter-tag">  
                        {filter} <button onClick={() => removeFilter(filter)}>x</button>  
                    </span>  
                ))}  
            </div>  
            <div className="filter-category">  
                <h5>Filters</h5>  
                {categories.map(category => (  
                    <label key={category}>  
                        <input  
                            type="checkbox"  
                            checked={selectedFilters.includes(category)}  
                            onChange={(e) => handleFilterChange(category, e.target.checked)}  
                        /> {category}  
                    </label>  
                ))}  
            </div>  
        </div>  
    );  
}  
  
export default FilterComponent;  
