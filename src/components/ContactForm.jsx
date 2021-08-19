import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  return (
    <>
      <h1>CONTACT</h1>
      <div className="contact-header-mail">
        <FontAwesomeIcon icon={faEnvelope} />
        <div>vbiljon@gmail.com</div>
      </div>

      <div className="contact-header-mail">
        <FontAwesomeIcon icon={faPhone} />
        <div>0747 007 4039</div>
      </div>
   
      <form name="contact" method="post" className="contact-form"> 
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-id">
          <input type="text" id="name" name="name" placeholder="Name" className="input-name" required />
          <input type="email" id="email" name="email" placeholder="Email" className="input-email" required />
        </div>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <input type="submit" value="Send" className="contact-send-button"/>
      </form>
    </>
  );
}