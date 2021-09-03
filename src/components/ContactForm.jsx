import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  return (
    <div className="contact-component">
      <div className="contact-infill-section"></div>
      <div className="contact-section">
        <div className="contact-section-head">
          <h1>Get in Touch:</h1>
          <div className="contact-header-mail">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>vbiljon@gmail.com</div>

            <FontAwesomeIcon icon={faPhone} />
            <div>0747 007 4039</div>
          </div>

          <h2>or</h2>
        </div>
    
        <form name="contact" method="post" className="contact-form"> 
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-id">
            <input type="text" id="name" name="name" placeholder="Name" className="input-name" required />
            <input type="email" id="email" name="email" placeholder="Email" className="input-email" required />
          </div>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
          <div className="contact-button-ribbon">
            <input type="submit" value="Send" className="contact-send-button"/>
            <div className="contact-button-infill"></div>
          </div>
        </form>
      </div>
      <div className="contact-infill-section"></div>
    </div>
  );
}