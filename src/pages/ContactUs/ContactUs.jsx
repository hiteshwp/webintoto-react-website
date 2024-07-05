import React from 'react';
import './../ContactUs/ContactUs.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Link } from 'react-router-dom';

import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'
import ourProcess from '../../assets/images/process-steps-img.svg';

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section bg-ghost-white">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2">Let’s get in touch</h2>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__text">
                  <p>Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.</p>
                </div>
              </div>
            </div>

            <div className="row contact__btm">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="contact__info">
                  <h3 className="sub-title-anim-top animation__word_come">Don't be afraid man ! <br />say hello</h3>
                  <ul>
                    <li><a href="tel:+911234567890">+91 12345 67890</a></li>
                    <li><a href="mailto:hello@webintoto.com">hello@webintoto.com</a></li>
                    <li><span>230 Norman Street Ahmedabad, <br /> Gujarat, India - 380001</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="contact__form">
                  <form action="" method="">
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="name" placeholder="Name *" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="email" name="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="tel" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="subject" placeholder="Subject *" />
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
                          <button className="btn btn-primary"> Send Messages <i className="ri-arrow-right-line ms-2"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        
      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
