import React from 'react';

export default function ContactForm() {
  return (
    <form name="contact" method="post" className="contact-form"> 
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact-id">
        <input type="text" id="name" name="name" placeholder="Name" className="input-name" required />
        {/* <label htmlFor="name">Name</label> */}

        <input type="email" id="email" name="email" placeholder="Email" className="input-email" required />
        {/* <label htmlFor="email">Email</label> */}
      </div>
      <div>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        {/* <label htmlFor="message">Message</label> */}
      </div>
      <input type="submit" value="Send" className="contact-send-button"/>
    </form>
  );
}