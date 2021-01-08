import React from 'react';
import "../css/contact.css";

function setGender (gender) {
    switch (gender) {
        case "male": return "maleSign";
        case "female": return "femaleSign";
        default: return "otherSign";
    }
}

function Contact(props) {
    return (
        <details>
            <summary className = "contact-title">{props.info.lastName} {props.info.firstName}</summary>
            <div className = "contact">
                <div >
                    <p className = {setGender(props.info.gender)}>
                        <img src = {props.info.photo} />
                    </p>
                </div>
                <div className = "contact-info">
                    <p className = "contact-info-header">ім'я: <span>{props.info.firstName}</span></p>
                    <p className = "contact-info-header">прізвище: <span>{props.info.lastName}</span></p>  
                    <a  className = "contact-info-header" href={props.info.phone}>моб.тел.: <span>{props.info.phone}</span></a>
                </div>
            </div>
        </details>
    )
}

export default Contact;
