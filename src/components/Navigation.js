import React from "react";
import "./Navigation.css";

const Navigation = ({ onNavigate }) => {
    return (
        <nav className="navbar">
            <ul className="navigation">
                <li><a href="#about" onClick={() => onNavigate("about")}>About</a></li>
                <li><a href="#education" onClick={() => onNavigate("education")}>Education</a></li>
                <li><a href="#skills" onClick={() => onNavigate("skills")}>Skills</a></li>
                <li><a href="#experience" onClick={() => onNavigate("experience")}>Experience</a></li>
                <li><a href="#projects" onClick={() => onNavigate("projects")}>Projects</a></li>
                <li><a href="#honors" onClick={() => onNavigate("honors")}>Honors and Awards</a></li>
                <li><a href="#contact" onClick={() => onNavigate("contact")}>Contact Me</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
