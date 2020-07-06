import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='section-title'>Lets Interact</h2>
      <p className='section-sub'>Swing by for a cup of coffee at my favourite Boristas, or leave me a message</p>
      <div className='row'>
        <div className='col-sm-6 bg-warning' >
          <h4>Contact Details</h4>
          <div className='grid-2'>
            <div class='contact-card'>
              <i className="fas fa-phone"></i> 
              <div className='contact-content'>
                <h3>Phone</h3>
                <span>084 466 4783</span>
              </div>
            </div>
            <div class='contact-card'>
              <i className="fas fa-map-marker-alt"></i> 
              <div className='contact-content'>
                <h3>Location</h3>
                <span>14 Hampden Avenue, Kensington</span>
              </div>
            </div>
            <div class='contact-card'>
              <i className="far fa-envelope"></i> 
              <div className='contact-content'>
                <h3>Email</h3>
                <span>chadhoosain@gmail.com</span>
              </div>
            </div>
            <div class='contact-card'>
              <i className="fab fa-linkedin-in"></i> 
              <div className='contact-content'>
                <h3>linkedin Profile</h3>
                <span>Chad Hoosain</span>
              </div>
            </div>
            <div class='contact-card'>
              <i className="fab fa-github"></i> 
              <div className='contact-content'>
                <h3>Github</h3>
                <span>ChadH28</span>
              </div>
            </div>
            <div class='contact-card'>
              <i className="fab fa-codepen"></i> 
              <div className='contact-content'>
                <h3>My Codepen</h3>
                <span>ChadH28</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <h4>Reach out through formspree</h4>
            <form action="https://formspree.io/chadhoosain@gmail.com" method="POST">
              <div className="form-group">
                <label for="name">Name / Fullname:</label>
                <input type="text" className="form-control" placeholder="Enter Name or Fullname" id="name"/>
              </div>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email"/>
              </div>
              <div className="form-group">
                <label for="message">Your message:</label>
                <textarea type="message" row='3' className="form-control" placeholder="Compose message" id="message"/>
              </div>
              <button type="submit" className="btn btn-success"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;