import React from "react";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>
                <b>BUDGET BUDDY (Web Development)</b><br />
                <br />
                BudJet Buddy is a web app connecting buyers and travelers for cost-effective goods. Users submit requests for items available at lower prices in specific regions, and the app matches them with registered travelers heading to their destination. Through seamless communication and negotiation, buyers can secure desired products while avoiding high transportation charges.
                <br />
                Tech: JavaScript, React, Html, CSS
            </p>
            <p>
                <b>YELP CAMP (Web Development, cyber Security)</b><br />
                <br />
                Yelp Camp is a user-friendly website designed to provide comprehensive information on nearby camping sites. Users can register, discover, and review campsites, while an integrated map feature facilitates easy navigation. This project prioritized cyber security, implementing robust measures to prevent XSS and SQL injection attacks, ensuring a secure user experience.
                <br />
                Tech: ReactJS, Node JS, Express JS, MongoDB, Mongoose, EJS
            </p>
            <p>
                <b>STENOGRAPHY CHAT APP (Web Development, Stenography LSB algorithm, Cyber Security)</b><br />
                <br />
                Developed stenography chat app using Chat Engine and ReactJS. Implements LSB algorithm to hide messages within images for enhanced privacy. Enables seamless message transmission undetectable to the human eye.
                <br />
                Tech: ReactJS, CSS, Chat Engine- SDK
            </p>
            <p>
                <b>INTERNSHIPS FINDER (Web Development)</b>
                <br />
                This is a scraping project made on Python with the help of library request which was used for scraping the data from the website the program projects the same data to flask hosted website with all the data which was scraped from the website like technical skills, experience required and the link for applying for the internship.
                <br />
                Tech: Python, JavaScript
            </p>
        </section>
    );
};

export default Projects;
