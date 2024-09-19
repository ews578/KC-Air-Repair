import React from "react";
import ContactForm from "./ContactForm"; 
import "/style.css"; 

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
          <h1>Contact Page</h1>
          <p>
            To request service you can call us directly at 913-555-5555 or simply fill out the form below. Provide us with
            your contact details and a brief description of the service you need. Our team will review your request and get
            back to you as soon as possible. Please be sure to include any relevant information that will help us understand
            your needs better.
          </p>
          <ContactForm />
        </div>
        <div className="contact-images">
          <div className="contact-image">
            <img src="/assets/contact us.jpg" alt="Contact" />
          </div>
          <div className="all-brands-image">
            <img src="/assets/all brands.jpg" alt="All Brands" />
          </div>
        </div>
      </div>
    </div>
  );
}
