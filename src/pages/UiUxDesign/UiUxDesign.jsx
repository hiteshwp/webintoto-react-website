import React from 'react';
import './../OurStory/OurStory.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import uiuxTitleImg from '../../assets/images/icons/ui-ux-service.svg';
import serviceImg1 from '../../assets/images/uiux-service-img1.jpg';
import serviceImg2 from '../../assets/images/icons/ui-ux-service2.svg';
import ourProcess from '../../assets/images/process-steps-img.svg';

import uiuxIcon from '../../assets/images/icons/ux-design.png'
import webProgrammingIcon from '../../assets/images/icons/web-programming.png'
import mobileDevelopmentIcon from '../../assets/images/icons/mobile-development.png'
import softwareDevelopmentIcon from '../../assets/images/icons/software-development.png'
import blockChainIcon from '../../assets/images/icons/blockchain.png'
import arVrIcon from '../../assets/images/icons/ar-vr.png'

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
                  <h6 className="title-label text-white">Design Service</h6>
                  <h2 className="main-title text-white text-capitalize">UI/UX Design <span className="color-purple-lite">Services</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Our in-house design studio targets delivering value-driven UI/UX designs that create engaging mobile and web apps. An innovative process, timely completion and superior user experience are our forte.</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={uiuxTitleImg} alt="UI/UX Design" className="title-icon uiux-title-icon" />
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
              <div className="col-12 col-md-12 col-lg-12">
                <div className="service-title-block1">
                  <h6 className="title-label">UI/UX Design Services</h6>
                  <h2 className="main-title text-capitalize">We are a leading UI/UX design company with solid design and development expertise.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="service-list-block1">
                  <ul className="service-list">
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Custom Tailored Design</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>User-Friendly Experiences</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Smoother Navigations</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Modern UX Tech Stack</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Expert UI UX Consulting Services</h6>
                    </li>
                  </ul>
                  <a className="btn btn-primary">Get In Touch <i class="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="service-img-block1">
                  <img src={serviceImg1} alt="UI/UX Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section2 start */}
        <section className="position-relative section-block service-section2 bg-ghost-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Design Services</h6>
                  <h2 className="main-title">Our UI UX <span className="color-purple-lite">Design</span> Services</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-md-4 col-lg-4">
                <div className="service-info-icon-card">
                  <span className="service-info-icon">
                    <i className="ri-mac-line"></i>
                  </span>
                  <h5>Web <br /> Design</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="service-info-icon-card">
                  <span className="service-info-icon">
                    <i className="ri-smartphone-line"></i>
                  </span>
                  <h5>Mobile <br /> App Design</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="service-info-icon-card">
                  <span className="service-info-icon">
                    <i className="ri-shape-line"></i>
                  </span>
                  <h5>Wirerames & <br /> Prototyping</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="service-info-icon-card">
                  <span className="service-info-icon">
                    <i className="ri-compasses-2-line"></i>
                  </span>
                  <h5>Logo <br /> Design</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="service-info-icon-card">
                  <span className="service-info-icon">
                    <i className="ri-pen-nib-line"></i>
                  </span>
                  <h5>Graphic <br /> Design</h5>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="service-img-block2">
                  <img src={serviceImg2} alt="Service Img" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 align-items-center d-flex">
                <div className="service-card-info">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium velit nulla perspiciatis. Fugiat voluptatum debitis esse, veritatis aliquam molestias harum cupiditate consectetur nulla blanditiis et sit? Nemo, alias eius.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section2 end */}

        {/* Service section3 start */}
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
        {/* Service section3 end */}

        {/* Service section3 start */}
        <section className="position-relative section-block service-section4 bg-white-pattern">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Industries</h6>
                  <h2 className="main-title">Industries We <span className="color-purple-lite">Work</span> With</h2>
                  <p>We don't differentiate against good ideas. We bring exceptional UI/UX design to every project.</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="service-card-block industries-service-card-block">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={uiuxIcon} alt="UI/UX" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Ecommerce</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="service-card-block industries-service-card-block">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={webProgrammingIcon} alt="Website Development" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">NGO</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="service-card-block industries-service-card-block">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={mobileDevelopmentIcon} alt="Mobile Application" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">User management</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="service-card-block industries-service-card-block">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={softwareDevelopmentIcon} alt="Software Development" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Entertainment Industries</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="service-card-block industries-service-card-block">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={blockChainIcon} alt="Blockchain" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Medical industries</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section3 end */}

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
