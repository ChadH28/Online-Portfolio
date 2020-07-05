import React from 'react';
import photo from './dummy.jpg';
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section>
      <h2 className='section-title'>Testimonials</h2>
      <p className='section-sub'>What other people think of me or my work</p>
      <div class="testimonial">
      <img src={photo} alt="Avatar" style={{width:"120px"}}/>
      <p><span>–Godwin P Dzvapatsva</span>Head of Curriculum and Learning</p>
      <p>Chad is a responsive, skilled and confident learner. Over the period that I have interacted with him, I have seen the respect and attention to detail that he accords to whatever he does. Highly recommendable developer.</p>
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