import React from 'react';
import godwin from './img/godwin.jpg';
import oslin from './img/oslin.jpeg';
import sajjaad from './img/sajjaad.jpg';
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section>
      <h2 className='section-title'>Testimonials</h2>
      <p className='section-sub'>What other people think of me or my work</p>
      <div class="testimonial">
      <img src={godwin} alt="Avatar" style={{width:"120px",height:"120px"}}/>
      <p><span>-Godwin P Dzvapatsva</span>Head of Curriculum and Learning</p>
      <p>Chad is a responsive, skilled and confident learner. Over the period that I have interacted with him, I have seen the respect and attention to detail that he accords to whatever he does. Highly recommendable developer.</p>
    </div>
    
    <div class="testimonial">
      <img src={oslin} alt="Avatar" style={{width:"120px",height:"120px"}}/>
      <p><span>-Oslin Johnson</span>Fellow Peer</p>
      <p>Chad is a great person to have on one's team a real innovator and critical thinker. He takes the time to dive into things and always gives his everything as there is some perfectionist in him, with all that qualities it relates in his work as a developer making the journey seem effortless.</p>
    </div>

    <div class="testimonial">
      <img src={sajjaad} alt="Avatar" style={{width:"120px",height:"120px"}}/>
      <p><span>-Sajjaad Francis</span>Fellow Peer</p>
      <p>Chad is a critical thinker, a hard worker, a problem solver, and lastly, extremely creative. I am sure that he will be a valuable asset to any and every company out there.</p>
    </div>
    </section>
  );
};

export default Testimonials;