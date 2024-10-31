import React from 'react';  
import './courseListing.css';  
import { FaStar } from 'react-icons/fa';
  
const CourseCard = ({ course }) => {  
    return (  
        <div className="course-card">  
            <img src={course.image} alt={course.name} className="course-image" />  
            <div className="course-info">  
                <h3 className="course-name">{course.name}</h3>  
                <p className="course-description">{course.description}</p>  
                <p className="course-meta">Cost: {course.cost}</p>  
                <p className="course-meta">Level: {course.Level}</p>  
                <p className="course-meta">Duration: {course.Duration}</p>  
                <p className="course-meta">Advance Category: {course.tags}</p>  
                <div className="rating">  
                    <span>{course.Rating} / 5</span> 
                    <FaStar className="star-icon" />  
                     
                </div>  
            </div>  
        </div>  
    );  
};  
  
export default CourseCard;  