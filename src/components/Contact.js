import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // Ensure you have your styling here

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_9ns8fb1', 
            'template_qu5gxsh', 
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            'kQikQbJ8TVyEhqm3f'
        )
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, (error) => {
            alert("Failed to send the message, please try again.");
            console.error('EmailJS error:', error);
        });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you have any queries or need further information, please send message or call me directly at <strong>9418887694</strong>.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
