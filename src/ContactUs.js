import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wr3y849', 'template_491f0au', form.current, {
        publicKey: 'k9C-CL7rMTM_jR-lI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById("formName").value = "";
          document.getElementById("emailName").value = "";
          document.getElementById("messageName").value = "";
          alert('Sent! I will get back to you as soon as possible.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='email'>
      <label>Name</label>
      <input type="text" name="user_name" id='formName'/>
      <label>Email</label>
      <input type="email" name="user_email" id='emailName'/>
      <label>Message</label>
      <textarea name="message" id='messageName'/>
      <button type="submit" value="Send">Send</button>
    </form>
  );
};