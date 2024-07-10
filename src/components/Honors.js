import React from "react";
import "./Honors.css";

const Honors = () => {
    return (
        <section id="honors">
            <h2>Honors and Awards</h2><br/>
            <div className="honors-container">
                <div className="honor-item">
                    <img src={`${process.env.PUBLIC_URL}/1.jpeg`} alt="Gold Medal" className="medal-image" />
                    <p>1st position in IEEE Hackathon at Jaypee University - 2023</p>
                </div>
                <div className="honor-item">
                    <img src={`${process.env.PUBLIC_URL}/1.jpeg`} alt="Gold Medal" className="medal-image" />
                    <p>1st Position in Hackathon by ENKINDLE - 2023</p>
                </div>
                <div className="honor-item">
                    <img src={`${process.env.PUBLIC_URL}/3.jpg`} alt="Bronze Medal" className="medal-image" />
                    <p>National Level Karate Bronze Medalist - 2019</p>
                </div>
            </div>
        </section>
    );
};

export default Honors;
