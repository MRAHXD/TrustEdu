// CourseCard.js  
import React from 'react';  
import './courseListing.css';
  
const CourseCard = ({ course }) => {  
    return (  
        <div className="course-card">  
            <img src={course.image} alt={course.name} className="course-image" />  
            <h3>{course.name}</h3>  
            <p>{course.description}</p>
            <p>{course.cost}</p> 
        </div>  
    );  
};  
  
export default CourseCard;  
