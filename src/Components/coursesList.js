// CoursesListing.js  
import React, { useState } from 'react';  
import CourseCard from './CourseCard';  
  
const CoursesListing = ({ courses }) => {  
    const [searchTerm, setSearchTerm] = useState('');  
  
    const handleSearchChange = (event) => {  
        setSearchTerm(event.target.value.toLowerCase());  
    };  
  
    const filteredCourses = courses.filter(course =>  
        course.name.toLowerCase().includes(searchTerm) ||  
        course.category.toLowerCase().includes(searchTerm)  
    );  
  
    return (  
        <div>  
            <input  
                type="text"  
                placeholder="Search courses"  
                onChange={handleSearchChange}  
                className="search-bar"  
            />  
            <div className="courses-container">  
                {filteredCourses.map(course => (  
                    <CourseCard key={course.id} course={course} />  
                ))}  
            </div>  
        </div>  
    );  
};  
  
export default CoursesListing;  
