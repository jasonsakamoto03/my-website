import React from "react";
import Navbar from "../Components/NavBar";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="about">
                <h2>Completed Projects</h2>
                <h4>Vaccine Scheduler</h4>
                <i>Utilized Java, SQL, Microsoft Azure, Java Database Connectivity (JDBC)</i>
                <p>This project is a vaccine reservation system application that is connected to a cloud database. I used JDBC to be able to directly update and query the database that contains appointments, caregiver availabilities, and avaiable vaccine doses. This program runs in the terminal and handles actions from patients and caregivers, requiring each user to sign in with username and password before perfroming viable such as updating availability or creating an appointment. I utilize salting and hashing to safely store user's passwords.</p>
                <h4>Connect-Four | <a href="https://github.com/jasonsakamoto03/connect-four">Link to Github Repository</a> | <a href="https://jasonsakamoto03.github.io/connect-four/">Link to Game</a></h4>
                <i>Utilized React.js</i>
                <p>This project is a simple game of Connect-Four developed using React.js to familiarize myself with the framework.</p>
                <h2>In the Works</h2>
                <h4>NFL Player Analytics | <a href="https://github.com/jasonsakamoto03/NFL-Player-Analytics">Link to Github Repository</a></h4>
                <i>Utilized Python (numpy, sqlite3, matplotlib, Jupyter Notebook), SQL</i>
                <p>This project is a program that manages, analyzes, and models NFL player data with the intention of predicting fantasy football success. Uses machine learning and numerical methods such as linear regression to identify trends in data and better understand the impacts of certain statistics.</p>
            </div>
        </div>
    );
};

export default Projects;