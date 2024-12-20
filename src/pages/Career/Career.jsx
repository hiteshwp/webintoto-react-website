import React from 'react';
import './../Career/Career.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import careerTitleImg from '../../assets/images/icons/career.svg';

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section1 overflow-hidden">
          <div className="section-shape2"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative uiux-service-title">
                  <h6 className="title-label text-white">Technologies Service</h6>
                  <h2 className="main-title text-white text-capitalize">Our <span className="color-purple-lite">Technologies</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem sunt reiciendis facilis quibusdam non quam ratione. Pariatur fuga deserunt incidunt dignissimos rem sit.</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={careerTitleImg} alt="Career" className="title-icon career-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-seasalt">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="sec-title-wrapper text-center">
                  <h2 className="sec-title animation__char_come">Think Career Progression</h2>
                  <p>It's time to raise your career graph with new height</p>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="career-contact-info bg-lavender p-4">
                  <h3>For Career Inquiry</h3>
                  <a href="#">info@webintoto.com</a>
                  <a href="#" className="mb-0">+91 12345 67890</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="career-form-block">
                    <div className="career-form-head">
                      <h4>Career Inquiries</h4>
                    </div>
                    <div className="career__form contact__form">
                      <form action="" method="">
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="text" name="full name" placeholder="Full Name" />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="email" name="email address" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="tel" name="phone" placeholder="Contact Number" />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="text" name="experience" placeholder="Total Experience" />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-xxl-12 col-xl-12 col-12">
                            <input type="file" name="file" placeholder="Upload Your CV" />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <textarea name="message" placeholder="Messages *"></textarea>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <div className="btn_wrapper">
                              <button className="btn btn-primary"> Send Your CV <i className="ri-arrow-right-line ms-2"></i></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}
      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
