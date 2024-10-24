import React, { useState } from 'react';  
import './navbar.css';  
  
function Navbar() {  
    const [isOpen, setIsOpen] = useState(false);  
  
    return (  
        <nav className="navbar">  
            <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => setIsOpen(!isOpen)}>  
                &#9776;  
            </span>  
            <a href="/" className="logo">TrustEdu</a>  
            <ul className={isOpen ? "main-nav active" : "main-nav"} id="js-menu">  
                <li>  
                    <a href="/" className="nav-links">Home</a>  
                </li>  
                <li>  
                    <a href="/courses" className="nav-links">Courses</a>  
                </li>  
                <li>  
                    <a href="/community" className="nav-links">Community</a>  
                </li>  
                <li>  
                    <a href="/about" className="nav-links">About</a>  
                </li>  
                <li>  
                    <a href="/contact" className="nav-links">Contact</a>  
                </li>  
                <li>  
                    <a href="/login" className="nav-links button">Login</a>  
                </li>  
                <li>  
                    <a href="/signup" className="nav-links button">Sign Up</a>  
                </li>  
            </ul>  
        </nav>  
    );  
}  
  
export default Navbar;  
