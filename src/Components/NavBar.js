import React from "react";
import '../App.css';

const Navbar = () => {
    return <>
    <header>
    <div className="bar">
        <h2>Jason Sakamoto</h2>
            <ul className="nav">
                <li><a href="https://jasonsakamoto03.github.io/my-website/">Home</a></li>
                <li><a href="https://jasonsakamoto03.github.io/my-website/about">About Me</a></li>
                <li><a href="https://jasonsakamoto03.github.io/my-website/projects">Projects</a></li>
                <li><a href="https://jasonsakamoto03.github.io/my-website/contact">Contact</a></li>
            </ul>
    </div>
    </header>
    </>
};

export default Navbar