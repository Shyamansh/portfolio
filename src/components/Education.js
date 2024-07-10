import React from "react";
import "./Education.css"; // Ensure you have your styling here

const Education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-content">
                <img src={`${process.env.PUBLIC_URL}/juit.jpeg`} alt="JUIT_LOGO" className="education-image" />
                <div className="education-text">
                    Jaypee University of Information Technology
                    <br />
                    Bachelor of Technology - Computer Science and Engineering
                    <br />
                    CGPA: 8.8
                    <br />
                    Waknaghat, India
                    <br />
                    September 2020 - June 2024
                    <br />
                    Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Cryptography, Penetration Testing, Networking, Databases
                </div>
            </div>
        </section>
    );
};

export default Education;
