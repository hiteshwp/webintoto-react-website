import React from 'react'
import "./../Home/Home.css";
import Header from './../../layouts/Header/Header';
import Footer from './../../layouts/Footer/Footer';

import heroBG1 from '../../assets/images/1-bg.png'
import heroDownArrow from '../../assets/images/arrow-down-big.png'
import clientLogo1 from '../../assets/images/client-logo/c-logo1.png'
import clientLogo2 from '../../assets/images/client-logo/c-logo2.png'
import clientLogo3 from '../../assets/images/client-logo/c-logo3.png'
import clientLogo4 from '../../assets/images/client-logo/c-logo4.png'
import clientLogo5 from '../../assets/images/client-logo/c-logo5.png'
import clientLogo6 from '../../assets/images/client-logo/c-logo6.png'
import clientLogo7 from '../../assets/images/client-logo/c-logo7.png'
import homeAbout from '../../assets/images/about-img1.jpg'
import symbol1 from '../../assets/images/symbol-yellow.svg'

const Home = () => {
  return (
    <>
      <Header />
      <div className="mainSection">
        {/* Top banner section start */}
        <section className="position-relative section-block hero__area d-flex align-items-center p-0 bg-dark">
          <div className="heroHome-slider swiper-container">
            <div className="align-items-center">
              <div className="container">
                <div className="row">
                  <div className="hero__title-wrapper col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column justify-content-center text-left text-white">
                    <small className="mb-3">We Deliver</small>
                    <h1 className="mb-3">World-class Digital Solutions</h1>
                    <p className="hero__sub-title">With every single one of our clients, we bring forth deep passion for <span className="text-white">creative problem solving</span> which is what we deliver.</p>
                    <div className="text-left">
                      <a href="#" className="btn btn-primary">Get a Quote in 24 Hours <i className="ri-arrow-right-line ms-2"></i></a>
                    </div>
                  </div>
                  <img src={heroDownArrow} alt="Down Arrow" className="hero_down_arrow" />
                </div>
              </div>
            </div>
          </div>
          <img src={heroBG1} alt="hero BG" className="hero1_bg" />
        </section>
        {/* Top banner section end */}

        {/* USP Counter and About section start */}
        <section className="position-relative section-block">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Solution</h6>
                  <h2 className="main-title">The Best Solution Agency <br /> For <span className="color-purple-lite">Your Business</span></h2>
                  <p className="title-description">Being a Web development company, we help Startups, Mid-Size, and Enterprise businesses to get their digital products done the right way on time.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div class="counter-wrapper mt-3">
                  <div class="counter-item">
                    <h2 class="counter-number">15</h2>
                    <p>Years experiences</p>
                  </div>
                  <div class="counter-item">
                    <h2 class="counter-number">189+</h2>
                    <p>Project Completed</p>
                  </div>
                  <div class="counter-item">
                    <h2 class="counter-number">99%</h2>
                    <p>Successful projects</p>
                  </div>
                  <div class="counter-item">
                    <h2 class="counter-number">150+</h2>
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
            <div className="row home-about-wrap">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="home-about-content-block">
                  <h3>One-stop solution for the online presence of your brand.</h3>
                  <p>Welcome to WebInToTo! As the name suggests we provide all services that help to enhance the performance of your brand online. With zero hassles, you will get the all the solutions at fair prices. Your search ends here for the services like Web Designing, Software Development, Mobile App Development, Digital Marketing, Search Engine Optimization (SEO), Social Media Marketing, Ecommerce Solutions, etc.</p>
                  <a href="#" className="btn btn-secondary">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="home-about-img-block">
                  <img src={homeAbout} alt="About Us" className="home-about-img" />
                  <img src={symbol1} alt="Symbol" className="home-about-logo-symbol" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* USP Counter and About section end */}

        {/* Service section start */}
        {/* <section className="position-relative section-block service-section">
           Service
        </section> */}
        {/* Service section end */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home
