import React from 'react';
import 'boxicons';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center p-5">
          <div className="col-xl-7 col-lg-7 col-md-12 textblock fadeInLeft">
            <h3 className="fadeInUp">Hello, It's Me</h3>
            <h1 className="fadeInUp">Dhanaseelan Subramani</h1>
            <h3 className="fadeInUp">
              And I'm aspiring <span className="highlight">Quality Analyst</span>
            </h3>
            <p className="fadeInUp">Let's connect on social media!</p>
            <div className="social-media fadeInUp">
              <a href="https://www.linkedin.com/in/dhanaseelan-subramani-47862422a/" target="_blank" rel="noreferrer">
                <box-icon type="logo" name="linkedin-square" className="social-icon"></box-icon>
              </a>
              <a href="https://github.com/dhanaseela39?tab=repositories" target="_blank" rel="noreferrer">
                <box-icon name="github" type="logo" className="social-icon"></box-icon>
              </a>
              <a href="https://www.instagram.com/dhanaseelan_22/" target="_blank" rel="noreferrer">
                <box-icon name="instagram" type="logo" className="social-icon"></box-icon>
              </a>
            </div>
            <a href="./Dhanaseelan Subramani Resume.pdf" download className="btn fadeInUp">
              Download my Resume
            </a>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 text-center fadeInRight">
            <img src="./bannar.png" alt="Dhanaseelan Banner" className="home-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
