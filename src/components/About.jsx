import React from 'react';

const About = () => {
  return (
    <section id='about' className='container mh-100 card py-5'>
      <div className='row align-items-center'>
        <div className='col-md-4 text-center mb-4 mb-md-0'>
          <img src="./dhanaseelan.jfif" alt="Dhanaseelan Subramani" className='about-img rounded-circle' />
        </div>
        <div className='col-md-8'>
          <h2 className='text-center text-md-start mb-4'>About Me</h2>
          <p className="text-justify mb-3">
            I am Dhanaseelan Subramani, an aspiring QA professional with expertise in API and manual testing, backed by dedicated QA training. I have interdisciplinary knowledge in Blockchain, Python, IoT, hardware, and electronics, which helps me approach QA with a broader perspective. Passionate about learning and sharing, I volunteer to teach technical concepts to deserving students, empowering others while enhancing my own understanding. Driven by commitment and curiosity, I aim to make a meaningful impact in the QA field.
          </p>
          <p className="text-justify">
            I am familiar with React, Spring Boot, basic Java, Python, Postman, STLC, SDLC, Testing principles, Test plan creation, Documentation, Article writing, Researching, and Paper Publishing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
