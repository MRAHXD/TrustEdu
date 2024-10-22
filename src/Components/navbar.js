import React, { useState } from 'react';  
import './navbar.css';  
  
function Navbar() {  
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");  
  
    const handleSearch = (event) => {  
        event.preventDefault();  
        alert(`Search for: ${searchQuery}`);  
        // Implement search functionality or redirect to a search page  
    }    
  
    return (  
        <nav className="navbar">  
            <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => setIsOpen(!isOpen)}>  
                &#9776;  
            </span>  
            <a href="/" className="logo">TrustEdu</a>
            <form onSubmit={handleSearch} className="search-form">  
                <input  
                    type="text"  
                    placeholder="Search..."  
                    value={searchQuery}  
                    onChange={(e) => setSearchQuery(e.target.value)}  
                    className="search-input"  
                    
                />  
                <button type="submit" className="icon-button">  
                    <i className="fas fa-search"></i>  
                </button>  
            </form>   
            <ul className={isOpen ? "main-nav active" : "main-nav"} id="js-menu">  
                <li>  
                    <a href="/" className="nav-links">Home</a>  
                </li>  
                <li>  
                    <a href="/about" className="nav-links">Courses</a>  
                </li>  
                <li>  
                    <a href="/services" className="nav-links">Community</a>  
                </li>  
                <li>  
                    <a href="/contact" className="nav-links">About</a>  
                </li>  <li>  
                    <a href="/contact" className="nav-links">Contact</a>  
                </li> 
            </ul>
        </nav> 
    );  
}  
  
export default Navbar;  
