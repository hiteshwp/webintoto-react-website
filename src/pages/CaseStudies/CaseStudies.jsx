import React from 'react';
import './../CaseStudies/CaseStudies.css';
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
        <section className="position-relative section-block inner-title-section">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="title-block mb-0 text-left">
                  <h2 className="main-title text-white text-capitalize">Case Studies</h2>
                  <h6 className="main-sub-title text-white">See how Webintoto has helped its clients achieve their vision of digital innovation</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Our work listing section start */}
        <section className="position-relative section-block bg-gray-pattern1 case-studies-list-section">
          <div className="case-studies-card">
            <Link to="/" className="text-decoration-none">
              <div className="case-studies-img-block">
                <img src={ourWorkImg} alt="" />
                <div className="service-tag-list">
                  <span className="service-tag">NGO</span>
                </div>
              </div>
              <div className="case-studies-info">
                <h3>We helped with developing comprehensive support solutions for internal processes and collaborative tools.</h3>
                <span className="view-case-study">View Case study <i className="ri-arrow-right-line ms-2"></i></span>
              </div>
            </Link>
          </div>
          <div className="case-studies-card">
            <Link to="/" className="text-decoration-none">
              <div className="case-studies-img-block">
                <img src={ourWorkImg} alt="" />
                <div className="service-tag-list">
                  <span className="service-tag">eCommerce</span>
                </div>
              </div>
              <div className="case-studies-info">
                <h3>We helped with developing comprehensive support solutions for internal processes and collaborative tools.</h3>
                <span className="view-case-study">View Case study <i className="ri-arrow-right-line ms-2"></i></span>
              </div>
            </Link>
          </div>
          <div className="case-studies-card">
            <Link to="/" className="text-decoration-none">
              <div className="case-studies-img-block">
                <img src={ourWorkImg} alt="" />
                <div className="service-tag-list">
                  <span className="service-tag">Business</span>
                </div>
              </div>
              <div className="case-studies-info">
                <h3>We helped with developing comprehensive support solutions for internal processes and collaborative tools.</h3>
                <span className="view-case-study">View Case study <i className="ri-arrow-right-line ms-2"></i></span>
              </div>
            </Link>
          </div>
        </section>
        {/* Our work listing section end */}

        {/* Our Process start */}
        <section className="position-relative section-block service-section3 bg-pink symbol-white2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Our Process</h6>
                  <h2 className="main-title">See what our projects have <br /> to go <span className="color-purple-lite">through..!</span></h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum molestias voluptatum ipsum sapiente sequi aliquam quas dolores quia ab, non impedit reiciendis vitae voluptatem quae quos debitis aut! Maiores neque voluptas, quod possimus, asperiores voluptatum, laboriosam fuga nemo vitae quos atque adipisci minus tenetur aspernatur harum doloribus officiis et.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="our-process-block">
                  <img src={ourProcess} alt="Our Process" />
                </div>
                <div className="cta-card-block">
                  <h4>Let's create your dream project</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et eligendi eos iste nesciunt quidem veniam ex soluta nostrum veritatis velit quia, architecto atque adipisci! Unde ex labore ullam expedita.</p>
                  <a className="btn btn-primary">Get in Touch <i class="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Process end */}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
