import React from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7t689h6', 'template_h9a2g4h', e.target, 'gS2iWeUH97qfdywp8');
        alert('Email Submitted!');
    }

    return (
        <div>
            <h1>Contact Me!</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label>Your Email:</label>
                    <input type="text" name="email_from" className="email-from"></input>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" className="message-box"></textarea>
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact
