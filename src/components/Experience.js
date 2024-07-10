import React from "react";
import "./Experience.css";

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience and Certification</h2>
            <div className="experience-item">
                <div className="experience-content">
                    <img src={`${process.env.PUBLIC_URL}/NICE.jpeg`} alt="certificate_NICE" className="experience-image" />
                    <div className="experience-text">
                        <span className="bold">National Institute of Computer Education</span>
                        <span className="right-align">Web Developer Trainee</span><br />
                        <span>6-week Training</span>
                        <span className="right-align">June 2023 - July 2023</span><br />
                        <br />
                        - Learning techniques and technology: Learned about multiple technologies and techniques of developing websites.<br />
                        - Hands-on experience on Development in new Technologies: React & Flutter based projects to help building new skill and learn about language<br />
                        - Final Project Assessment: Created a Final react based project to complete the final assessment
                    </div>
                </div>
                <br />
            </div>
            <div className="experience-item">
                <div className="experience-content">
                    <img src={`${process.env.PUBLIC_URL}/udemy.png`} alt="certificate_udemy" className="experience-image" />
                    <div className="experience-text">
                        <span className="bold">Learn Ethical Hacking From Scratch</span>
                        <span className="right-align">Udemy</span><br />
                        <span>Certificate</span>
                        <span className="right-align">8 Nov 2022</span><br />
                        Course Description- Learned about the basics of ethical hacking and penetration testing while using Kali Linux
                    </div>
                </div>
                <br />
            </div>
            <div className="experience-item">
                <div className="experience-content">
                    <img src={`${process.env.PUBLIC_URL}/udemy.png`} alt="certificate_udemy" className="experience-image" />
                    <div className="experience-text">
                        <span className="bold">Complete Ethical Hacking Bootcamp 2023 ZTM</span>
                        <span className="right-align">Udemy</span><br />
                        <span>Certificate</span>
                        <span className="right-align">4 July 2023</span><br />
                        Course Description- Learned about vulnerabilities in a device and how to exploit them while maintaining access
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
