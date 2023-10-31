import React, { useRef, useState } from 'react';
import axios from 'axios';
import contactTopBg from '../assets/backgrounds/contact-top-bg.png';
import contactLeftImg from '../assets/Illustrations/contact-left-img.png';
import contactRightImg from '../assets/Illustrations/contact-right-img.png';
import contactBottomBg from '../assets/backgrounds/contact-bottom-bg.png';


const Contact = (props) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [warning, setWarning] = useState('');
  
  const submitButton = useRef();
  const emailPattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const API_URL = 'https://document-mountain-api.herokuapp.com';


  const handleContactName = (e) => {
    setContactName(e.target.value);
  }

  const handleContactEmail = (e) => {
    setContactEmail(e.target.value);
  }

  const handleContactMessage = (e) => {
    setContactMessage(e.target.value);
  }

  const resetInputFields = () => {
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  }

  const iscorrectlyFilled = () => {
    if (emailPattern.test(contactEmail) && contactName.trim() && contactMessage.trim()) {
      return true;
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (iscorrectlyFilled()) {
      submitButton.current.innerHTML = `<i class="fas fa-spinner"></i>`
      setWarning('');

      // 1. save the contact to DB
      try {
        await axios.post(
          `${API_URL}/api/contact/save`, 
          {
            name: contactName,
            email: contactEmail,
            message: contactMessage
          }
        );
      }
      catch(err) {
        console.log(err);
      }
      
      // 2. send the contact info to Shootfish
      try {
        await axios.post(
          `${API_URL}/api/contact/mail`, 
          {
            name: contactName,
            email: contactEmail,
            message: contactMessage
          }
        );
      }
      catch(err) {
        console.log(err);
      }

      // 3. send an automated response to client
      try {
        await axios.post(
          `${API_URL}/api/contact/bot-response`, 
          {
            name: contactName,
            email: contactEmail,
            message: contactMessage
          }
        );
      }
      catch(err) {
        console.log(err);
      }

      resetInputFields();
      submitButton.current.innerHTML = `<i class="fas fa-check-circle"></i>`
    }
    else {
      if (!(contactName.trim())) setWarning('*name is required');
      else if (!emailPattern.test(contactEmail)) setWarning('*input a valid email');
      else if (!contactMessage.trim()) setWarning('*message is required');
    }
  }



  return (
    <div className="Contact">
      <img className="contact-top-bg" src={ contactTopBg } alt="" />
      <h1>Contact us</h1>
      
      <div className="contact-body">
        <div className="contact-left-illustration">
          <img src={ contactLeftImg } alt="" />
        </div>

        <form className="contact-form">
          <div className="contact-name-box">
            <p>Name</p>
            <input 
              type="text" 
              value={ contactName }
              onChange={ (e) => handleContactName(e) }
            />
          </div>
          <div className="contact-email-box">
            <p>Email</p>
            <input 
              type="text" 
              value={ contactEmail }
              onChange={ (e) => handleContactEmail(e) }
            />
          </div>
          <div className="contact-message-box">
            <p>Message</p>
            <textarea 
              value={ contactMessage }
              onChange={ (e) => handleContactMessage(e) }
            />
          </div>
          <button onClick={ (e) => handleSubmit(e) } ref={ submitButton }>
            SEND
          </button>
          <p className="warning">{ warning }</p>
        </form>

        <div className="contact-right-illustration">
          <img src={ contactRightImg } alt="" />
        </div>
      </div>
      <img className="contact-bottom-bg" src={ contactBottomBg } alt="" />
    </div>
  );
}


export default Contact;