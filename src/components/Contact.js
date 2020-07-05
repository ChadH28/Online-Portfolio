import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='section-title'>Lets Interact</h2>
      <p className='section-sub'>Swing by for a cup of coffee at my favourite Boristas, or leave me a message</p>

      <div className='row'>
        <div className='col-sm-6 bg-warning' >
          <h4>Contact Details</h4>
        </div>
        <div className='col-sm-6'>
          <h4>Reach out through formspree</h4>
        </div>
      </div>

    </section>
  );
};

export default Contact;