import React from "react";
import '../App.css';

const Navbar = () => {
    return <>
    <header>
    <div className="bar">
        <h2>Jason Sakamoto</h2>
            <ul className="nav">
                <li><a href="./">Home</a></li>
                <li><a href="./About">About Me</a></li>
                <li><a href="./Projects">Projects</a></li>
                <li><a href="./Contact">Contact</a></li>
            </ul>
    </div>
    </header>
    </>
};

export default Navbar