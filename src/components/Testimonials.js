import React from 'react';
import photo from './dummy.jpg';
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section>
      <h2 className='section-title'>Testimonials page</h2>
      <div class="testimonial">
      <img src={photo} alt="Avatar" style={{width:"120px"}}/>
      <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
      <p>John Doe saved us from a web disaster.</p>
    </div>
    
    <div class="testimonial">
      <img src={photo} alt="Avatar" style={{width:"120px"}}/>
      <p><span >Rebecca Flex.</span> CEO at Company.</p>
      <p>No one is better than John Doe.</p>
    </div>
    </section>
  );
};

export default Testimonials;