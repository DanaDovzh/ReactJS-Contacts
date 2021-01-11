import React from 'react';
import "../css/contact.css";

function setGender (gender) {
    switch (gender) {
        case "male": return "maleSign";
        case "female": return "femaleSign";
        default: return "otherSign";
    }
}

function Contact({firstName, lastName, gender, photo, phone}) {
    return (
        <details>
            <summary className = "contact-title">{lastName} {firstName}</summary>
            <div className = "contact">
                <div >
                    <p className = {setGender(gender)}>
                        <img src = {photo} />
                    </p>
                </div>
                <div className = "contact-info">
                    <p className = "contact-info-header">ім'я: <span>{firstName}</span></p>
                    <p className = "contact-info-header">прізвище: <span>{lastName}</span></p>  
                    <a  className = "contact-info-header" href={phone}>моб.тел.: <span>{phone}</span></a>
                </div>
            </div>
        </details>
    )
}

export default Contact;
