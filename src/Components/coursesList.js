import React, { useState, useEffect } from 'react';  
import CourseCard from './courseCard.js';  
import './courseListing.css';
 
  
const CoursesListing = ({ courses, selectedFilters, priceFilter, priceRange  }) => {  
    const [searchTerm, setSearchTerm] = useState('');  
    const [filteredCourses, setFilteredCourses] = useState([]);  
    const [loading, setLoading] = useState(false);  
    const [additionalFilters, setAdditionalFilters] = useState([]);  
  
    const additionalFilterOptions = ["Youtube", "E-learning Platform", "Official Documentation", "Private Educator", "Courses Platform"];  
  
    useEffect(() => {  
        setLoading(true);  
        const timeoutId = setTimeout(() => {  
            const filtered = courses.filter(course => {  
                const courseCost = course.cost === 'Free' ? 0 : parseFloat(course.cost.replace('$', ''));  
                return (  
                    (selectedFilters.length === 0 || selectedFilters.includes(course.category)) &&  
                    (additionalFilters.length === 0 || additionalFilters.some(filter => course.tags === filter)) &&  
                    (course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm)) &&  
                    (priceFilter === 'all' ||   
                     (priceFilter === 'free' && courseCost === 0) ||  
                     (priceFilter === 'paid' && courseCost > 0 && courseCost >= priceRange[0] && courseCost <= priceRange[1]))  
                );  
            });  
            setFilteredCourses(filtered);  
            setLoading(false);  
        }, 500);  
      
        return () => clearTimeout(timeoutId);  
    }, [courses, selectedFilters, searchTerm, additionalFilters, priceFilter, priceRange]); 
  
    const handleSearchChange = (event) => {  
        setSearchTerm(event.target.value.toLowerCase());  
    };  
  
    const toggleAdditionalFilter = (filter) => {  
        setAdditionalFilters(prevFilters =>  
            prevFilters.includes(filter) ? prevFilters.filter(f => f !== filter) : [...prevFilters, filter]  
        );  
    };  
  
    return (  
        
        <div>  
          <input  
                type="text"  
                placeholder="Search courses"  
                onChange={handleSearchChange}  
                className="search-bar"  
            />  
            {additionalFilterOptions.map(option => (  
                <button  
                    key={option}  
                    onClick={() => toggleAdditionalFilter(option)}  
                    className={`filter-button ${additionalFilters.includes(option) ? 'active' : ''}`}  
                >  
                    {option}  
                </button>  
            ))}  
            <div className="courses-container">  
                {loading ? (  
                    <div className="loading">Loading...</div>  
                ) : filteredCourses.length > 0 ? (  
                    filteredCourses.map(course => (  
                        <CourseCard key={course.id} course={course} />  
                    ))  
                ) : (  
                    <div className="no-results">No courses match your criteria.</div>  
                )}  
            </div>  
        </div>  
    );  
};  
  
export default CoursesListing;  