import React from 'react';

export default function ContactForm() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label hitmlFor="name">Name</label> <br/>
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label hitmlFor="email">Email</label> <br/>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label hitmlFor="message">Message</label> <br/>
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit Message" />
      </p>
    </form>
  );
}