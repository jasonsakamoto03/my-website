import React from "react";
import Navbar from "../Components/NavBar";
import { ContactUs } from "../ContactUs";


const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="title">
                <h1>Contact</h1>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Contact;