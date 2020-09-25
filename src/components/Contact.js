import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contactme" className='contact'>
      <h2 className='section-title'>Lets Interact</h2>
      <p className='section-sub'>Swing by for a cup of coffee at my favourite Boristas, or leave me a message</p>
      <div className='row'>
        <div className='col-sm-12 contact-container'>
          <h4>Contact Details</h4>
          <div className='grid-2'>
            <div class='contact-card call'>
              <div><i className="fas fa-phone"></i></div> 
              <div><span>084 466 4783</span></div>
            </div>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='contact-card google'>
              <div><i className="far fa-envelope"></i></div>
              <div><span>chadhoosain @gmail.com</span></div>
            </a>
            <a href='https://www.linkedin.com/in/chad-hoosain-3660641a6/' className='contact-card linkedin'>
              <div><i className="fab fa-linkedin-in"></i></div> 
              <div><span>Chad Hoosain</span></div>
            </a>
            <a href='https://github.com/ChadH28' className='contact-card github'>
            <div><i className="fab fa-github text-center"></i></div>
                <div className='text-center'><span >ChadH28</span></div>
            </a>
            <a href='https://codepen.io/chadh28' className='contact-card code-pen'>
              <div><i className="fab fa-codepen"></i></div>
              <div><span>ChadH28</span></div>
            </a>
        </div>
      </div>
        <div className='col-sm-6 form-container'>
          <h4>Reach out through formspree</h4>
            <form action="https://formspree.io/chadhoosain@gmail.com" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name / Fullname:</label>
                <input type="text" className="form-control" placeholder="Enter Name or Fullname" id="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message:</label>
                <textarea type="message" row='3' className="form-control" placeholder="Compose message" id="message"/>
              </div>
              <button type="submit" className="btn btn-danger"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;