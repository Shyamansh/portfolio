import React from "react";
import ProfileImage from "./ProfileImage";
import "./Homepage.css"; 

const Homepage = () => {
    return (
        <div className="homepage">
            <ProfileImage />
            <h1>Shyamansh Sharma</h1>
            <p>Welcome to my website! I'm a developer experienced in building websites for small and medium-sized businesses.</p>
            <a href="#about">Learn more about me</a>
        </div>
    );
};

export default Homepage;
