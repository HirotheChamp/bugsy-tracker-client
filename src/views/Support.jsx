import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../static/css/Support.css";

function Support() {
  return (
    <section className='contact'>
      <div className='content'>
    <h2>Contact Us</h2>
      </div>
      <div className='supportcontainer'>
        <div className='contactInfo'>
          <div className='box'>
            <div className='icon-box'>
          <FontAwesomeIcon className='icon' icon={faLocationDot} />
          </div>
              <div className='text'>
                <h3>Address</h3>
                <p>715 Craig Ave, Campbell, California 95008</p>
              </div>
            </div>
          
          <div className='box'>
          <div className='icon-box'>
          <FontAwesomeIcon className='icon' icon={faPhone} />
          </div>
              <div className='text'>
                <h3>Phone</h3>
                <p>408-888-6532</p>
              </div>
            </div>
          
          <div className='box'>
          <div className='icon-box'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </div>
              <div className='text'>
                <h3>Email</h3>
                <p>kyleyoungins94@gmail.com</p>
              </div>
            </div>
        </div>
      

      <div className='contactForm'>
        <form action='https://formsubmit.co/kyleyoungins94@gmail.com' method='POST'>
          <h2>Send Message</h2>
          <div className='inputBox'>
            <input type='text' name='Name' required='required'/>
            <span>Full Name</span>
          </div>
          <div className='inputBox'>
            <input type='email' name='Email' required='required'/>
            <span>Email</span>
          </div>
          <div className='inputBox'>
            <textarea name='Message' required='required'></textarea>
            <span>Type your Message</span>
          </div>
          <div className='inputBox'>
            <input type='submit' name='' value="Send"/>
          </div>
          
        </form>
        </div>
      </div>
    </section>
   
  );
}

export default Support;