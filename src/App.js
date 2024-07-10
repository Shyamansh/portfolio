import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Honors from "./components/Honors";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import "./App.css"; // Import your global styling

function App() {
    const [activeSection, setActiveSection] = useState(null);

    const handleNavigation = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="app-container">
            <Homepage />
            <Navigation onNavigate={handleNavigation} />
            <main className="main-content">
                {activeSection === "about" && <About />}
                {activeSection === "education" && <Education />}
                {activeSection === "skills" && <Skill />}
                {activeSection === "experience" && <Experience />}
                {activeSection === "projects" && <Projects />}
                {activeSection === "honors" && <Honors />}
                {activeSection === "volunteer" && <Volunteer />}
                {activeSection === "contact" && <Contact />}
            </main>
        </div>
    );
}

export default App;
