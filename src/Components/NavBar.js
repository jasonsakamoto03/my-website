import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
    return <>
    <header>
    <div className="bar">
        <h2>Jason Sakamoto</h2>
            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
    </div>
    </header>
    </>
};

export default Navbar