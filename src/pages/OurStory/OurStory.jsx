import React from 'react';
import './../OurStory/OurStory.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import topAboutImg from '../../assets/images/about-img1.jpg'
import homeAbout from '../../assets/images/about-img1.jpg'
import symbol1 from '../../assets/images/symbol-white.svg'
import clientLogo1 from '../../assets/images/client-logo/c-logo1.png'
import clientLogo2 from '../../assets/images/client-logo/c-logo2.png'
import clientLogo3 from '../../assets/images/client-logo/c-logo3.png'
import clientLogo4 from '../../assets/images/client-logo/c-logo4.png'
import clientLogo5 from '../../assets/images/client-logo/c-logo5.png'
import clientLogo6 from '../../assets/images/client-logo/c-logo6.png'
import clientLogo7 from '../../assets/images/client-logo/c-logo7.png'
import teamImg1 from '../../assets/images/team/team-img-1.jpg'

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label text-white">Our Story</h6>
                  <h2 className="main-title text-white text-capitalize">We’re making work <span className="color-purple-lite">meaningful</span> <br /> for everyone, everywhere.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Inner about section start */}
        <section className="position-relative section-block inner-about-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="inner-about-img-block">
                  <img src={topAboutImg} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="inner-about-info">
                  <h2>We Are Increasing Business Success With Technology</h2>
                  <h6>Over 7 years working in IT services developing software applications and mobile apps for clients all over the world.</h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="inner-about-info">
                  <p>As the name suggests we provide all services that help to enhance the performance of your brand online. With zero hassles, you will get the all the solutions at fair prices. Your search ends here for the services like Web Designing, Software Development, Mobile App Development, Digital Marketing, Search Engine Optimization (SEO), Social Media Marketing, Ecommerce Solutions, etc. We offer solutions to fit your requirements with our customized packages to meet your requirements for the online presence of your brands. Our professional services help your brand to grow upward in the respective industries. Brand awareness and brand recognition will wholly depend upon the website and optimizing it. WebInToTo will serve this industry for more than ten years. With time, we also grew and developed as the best service provider in the industry of website development and design.</p>
                </div>
              </div>
            </div>

            <div className="row home-about-wrap flex-md-row-reverse flex-lg-row-reverse">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="home-about-content-block">
                  <h6>What We Do, What You Get</h6>
                  <h3>Fresh Ideas. <br/> Thoughtful Design.</h3>
                  <p>Welcome to WebInToTo! As the name suggests we provide all services that help to enhance the performance of your brand online.</p>
                  <div className="list-icons">
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Our Experience</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">We are catering to this industry for more than 7 years successfully. We enlarged our services to many companies with IT-related requirements.</p>
                    </div>
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Dedicated and Proficient Team</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">Our experienced and passionate team members are having years of experience in the respective industry. Their expertise and knowledge increase our strength to serve our clients.</p>
                    </div>
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Versatility to serve you better</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">We have the expertise and experience that help brands to uplift the graph of success upwards and take their business to an elevated level in the competitive market.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="home-about-img-block">
                  <img src={homeAbout} alt="About Us" className="home-about-img" />
                  <img src={symbol1} alt="Symbol" className="home-about-logo-symbol" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="counter-wrapper mt-3">
                  <div className="counter-item">
                    <h2 className="counter-number">15</h2>
                    <p>Years experiences</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">189+</h2>
                    <p>Project Completed</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">99%</h2>
                    <p>Successful projects</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">150+</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="client-logo-wrapper">
                    <div className="client-logo-item">
                      <img src={clientLogo1} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo2} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo3} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo4} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo5} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo6} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo7} alt="Client Logo" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        {/* Inner about section end */}

        {/* Team section start */}
        <section className="position-relative section-block home-about-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Team</h6>
                  <h2 className="main-title">Meet <span className="color-purple-lite">Our Team</span></h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <div className="our-team-card">
                  <div className="our-team-img">
                    <img src={teamImg1} alt="Team" />
                  </div>
                  <div className="our-team-info">
                    <span className="designation-text">Markting Expert</span>
                    <h4 className="team-name">Jannat Ferdaus</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="our-team-card">
                  <div className="our-team-img">
                    <img src={teamImg1} alt="Team" />
                  </div>
                  <div className="our-team-info">
                    <span className="designation-text">Markting Expert</span>
                    <h4 className="team-name">Jannat Ferdaus</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="our-team-card">
                  <div className="our-team-img">
                    <img src={teamImg1} alt="Team" />
                  </div>
                  <div className="our-team-info">
                    <span className="designation-text">Markting Expert</span>
                    <h4 className="team-name">Jannat Ferdaus</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="our-team-card">
                  <div className="our-team-img">
                    <img src={teamImg1} alt="Team" />
                  </div>
                  <div className="our-team-info">
                    <span className="designation-text">Markting Expert</span>
                    <h4 className="team-name">Jannat Ferdaus</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team section end */}

        {/* Life at webintoto section start */}
        <section className="position-relative section-block life-at-webintoto-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Gallery Take A Peek</h6>
                  <h2 className="main-title">Life at <span className="color-purple-lite">Webintoto</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="image-gallery">
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                  <div className="image-gallary-item">
                    <img src={topAboutImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Life at webintoto section end */}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
