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
          <i className="fas fa-phone"></i> 084 466 4783
          <i class="far fa-envelope"></i> chadhoosain@gmail.com
          <i class="fab fa-linkedin-in"></i> Chad Hoosain
          <i class="fab fa-github"></i> ChadH28
          <i class="fab fa-codepen"></i> ChadH28
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