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
      <p><span>-Godwin P Dzvapatsva</span>Head of Curriculum and Learning</p>
      <p>Chad is a responsive, skilled and confident learner. Over the period that I have interacted with him, I have seen the respect and attention to detail that he accords to whatever he does. Highly recommendable developer.</p>
    </div>
    
    <div class="testimonial">
      <img src={photo} alt="Avatar" style={{width:"120px"}}/>
      <p><span>-Oslin Johnson</span>Fellow Colleague</p>
      <p>Chad is a great person to have on one's team a real innovator and critical thinker. He takes the time to dive into things and always gives his everything as there is some perfectionist in him, with all that qualities it relates in his work as a developer making the journey seem effortless.</p>
    </div>
    </section>
  );
};

export default Testimonials;