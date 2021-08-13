import React from 'react';

export default function ContactForm() {
  return (
    <form name="contact" method="post" >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact-form">
        <div>
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      
      <div className="contact-form">
        <div>
          <textarea id="message" name="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>
      </div>
      <p>
        <input type="submit" value="Send" />
      </p>
    </form>
  );
}