import React from "react";
import "./Skill.css"; // Ensure you have your styling here

const skillsData = [
    {
        category: "Languages",
        skills: [
            { name: "C++", image: `${process.env.PUBLIC_URL}/c++.png` },
            { name: "Python", image: `${process.env.PUBLIC_URL}/python.png` },
            { name: "JavaScript", image: `${process.env.PUBLIC_URL}/JS.png` },
            { name: "SQL", image: `${process.env.PUBLIC_URL}/sql.png` },
            { name: "Bash", image: `${process.env.PUBLIC_URL}/bash.png` }
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { name: "Flask", image: `${process.env.PUBLIC_URL}/flask.png` },
            { name: "NodeJS", image: `${process.env.PUBLIC_URL}/nodejs.png` },
            { name: "ReactJS", image: `${process.env.PUBLIC_URL}/reactjs.jpeg` }
        ]
    },
    {
        category: "Tools",
        skills: [
            { name: "GIT", image: `${process.env.PUBLIC_URL}/git.png` },
            { name: "MySQL", image: `${process.env.PUBLIC_URL}/mysql.png` },
            { name: "SQLite", image: `${process.env.PUBLIC_URL}/sqllite.jpeg` },
            { name: "Wireshark", image: `${process.env.PUBLIC_URL}/wireshark.png` },
            { name: "Metasploit", image: `${process.env.PUBLIC_URL}/metasploit.png` }
        ]
    },
    {
        category: "Platforms",
        skills: [
            { name: "Linux", image: `${process.env.PUBLIC_URL}/linux.png` },
            { name: "Windows", image: `${process.env.PUBLIC_URL}/windows.png` },
            { name: "Visual Studio", image: `${process.env.PUBLIC_URL}/visualstudio.png` },
            { name: "VScode", image: `${process.env.PUBLIC_URL}/vscode.png` },
            { name: "Google Colab", image: `${process.env.PUBLIC_URL}/googlecolab.png` }
        ]
    },
];

const Skill = () => {
    return (
        <section id="skills">
            <h2>Skills Summary</h2>
            {skillsData.map((category) => (
                <div key={category.category} className="skills-category">
                    <h3>{category.category}</h3>
                    <div className="skills-container">
                        {category.skills.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <img src={skill.image} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="scroll-indicator left"></div>
                    <div className="scroll-indicator right"></div>
                </div>
            ))}
        </section>
    );
};

export default Skill;
