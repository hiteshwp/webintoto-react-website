import React from 'react';
import './../TechnologiesDetails/TechnologiesDetails.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import serviceImg1 from '../../assets/images/dev-1.jpg';

import appleIcon from '../../assets/images/technologies/apple.png';
import ourProcess from '../../assets/images/process-steps-img.svg';

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section bg-white d-flex align-items-center h-100vh">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block mb-0">
                  <div className="our-work-logo">
                    <img src={appleIcon} alt="iOS" />
                  </div>
                  <h2 className="our-work-main-title main-title text-capitalize">iPhone App Development Company</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem dolor natus voluptates minima at praesentium velit odit beatae quos fugiat atque voluptatem, ipsam voluptatibus, ullam impedit, voluptas numquam quaerat non. Minima error provident inventore quaerat vel distinctio voluptatibus non rerum veritatis. Consequuntur laudantium quis, labore enim necessitatibus quidem obcaecati!</p>
                  <a href="#" className="btn btn-yellow mt-4">Schedule a Free Consultation!</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}
        
        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-yellow symbol-white1">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="service-title-block1 mb-4">
                  <h6 className="title-label">iPhone</h6>
                  <h2 className="main-title text-capitalize">iPhone App Development Services</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                </div>
                <div className="service-list-block1">
                  <ul className="service-list">
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>iPad/iPod Music Application</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Online Booking Apps</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>iPhone Game Development</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Social/Chat Apps</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Education Application Development</h6>
                    </li>
                  </ul>
                  <a className="btn btn-primary">Talk to our expert team <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="service-img-block1 h-100">
                  <img src={serviceImg1} alt="UI/UX Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Our Process start */}
        <section className="position-relative section-block service-section3 bg-white-pattern">
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
                <div className="cta-card-block bg-lavender">
                  <h4>Let's create your dream project</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et eligendi eos iste nesciunt quidem veniam ex soluta nostrum veritatis velit quia, architecto atque adipisci! Unde ex labore ullam expedita.</p>
                  <a className="btn btn-primary">Get in Touch <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Process end */}

        {/* Testinomials section start */}
        <section className="position-relative section-block testimonial-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Client Testimonials</h6>
                  <h2 className="main-title">Good things our clients<br /> saying about <span className="color-purple-lite">WEBINTOTO</span></h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="client-testimonials">
                  <Carousel interval={7000}>
                    <Carousel.Item>
                      <div className="testimonial-content">
                        <p className="review-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, neque dolores? Est nesciunt porro accusamus harum, aliquam animi voluptate? Asperiores laborum exercitationem assumenda mollitia porro ex dignissimos ducimus animi laboriosam velit facere minima, similique molestias soluta eaque quam ipsam itaque inventore dolorem reiciendis quidem. Consequuntur error dolores autem quae cumque?</p>
                        <h4 className="review-heading">Michael Brian</h4>
                        <h6 className="review-sub-heading">Vice President</h6>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="testimonial-content">
                        <p className="review-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, neque dolores? Est nesciunt porro accusamus harum, aliquam animi voluptate? Asperiores laborum exercitationem assumenda mollitia porro ex dignissimos ducimus animi laboriosam velit facere minima, similique molestias soluta eaque quam ipsam itaque inventore dolorem reiciendis quidem. Consequuntur error dolores autem quae cumque?</p>
                        <h4 className="review-heading">Michael Brian</h4>
                        <h6 className="review-sub-heading">Vice President</h6>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="testimonial-content">
                        <p className="review-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, neque dolores? Est nesciunt porro accusamus harum, aliquam animi voluptate? Asperiores laborum exercitationem assumenda mollitia porro ex dignissimos ducimus animi laboriosam velit facere minima, similique molestias soluta eaque quam ipsam itaque inventore dolorem reiciendis quidem. Consequuntur error dolores autem quae cumque?</p>
                        <h4 className="review-heading">Michael Brian</h4>
                        <h6 className="review-sub-heading">Vice President</h6>
                      </div>
                    </Carousel.Item>
                  </Carousel> 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testinomials section end */}
      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
