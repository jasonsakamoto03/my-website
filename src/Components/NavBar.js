import React from "react";
import '../App.css';

const Navbar = () => {
    return <>
    <header>
    <div className="bar">
        <h2>Jason Sakamoto</h2>
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </div>
    </header>
    </>
};

export default Navbar