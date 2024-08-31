import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ072jQXYLCJIKgsJ9v-JVB6vPoSxhJSTOPyA&s" alt="Contact Us" />
        </div>
      </div>
      
    </div>
    <div className="map-container">
  <iframe
    title="Ravulapalem Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15407.29584985829!2d81.84993923667458!3d16.441200265588434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38a7d5d6762c81%3A0xa1db35e45eafcb5d!2sRavulapalem%2C%20Andhra%20Pradesh%2053375%2C%20India!5e0!3m2!1sen!2sin!4v1693495607143!5m2!1sen!2sin"
    width="100%"
    height="200"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>

  
  </>
  );
};

export default Contact;
