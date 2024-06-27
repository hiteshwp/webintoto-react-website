import React from 'react';
import './../OurStory/OurStory.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import arvrTitleImg from '../../assets/images/icons/arvr.svg';
import serviceImg1 from '../../assets/images/dev-2.jpg';

import uiuxIcon from '../../assets/images/icons/ux-design.png'
import webProgrammingIcon from '../../assets/images/icons/web-programming.png'
import mobileDevelopmentIcon from '../../assets/images/icons/mobile-development.png'
import softwareDevelopmentIcon from '../../assets/images/icons/software-development.png'
import blockChainIcon from '../../assets/images/icons/blockchain.png'

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section1 overflow-hidden">
          <div className="section-shape4"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative uiux-service-title">
                  <h2 className="main-title text-white text-capitalize">AR/VR <span className="color-purple-lite">Service</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis necessitatibus cupiditate totam reiciendis, dicta esse voluptatibus quam expedita iste facilis aut quisquam blanditiis explicabo possimus natus dolorum nemo repellat?</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={arvrTitleImg} alt="AR/VR" className="title-icon arvr-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-papaya-whip">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7">
                <div className="service-title-block1 mb-4">
                  <h2 className="main-title text-capitalize">Shape the Future with an Innovative <sapn className="color-purple-lite">Augmented Reality Development</sapn> Company</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                </div>
                <div className="service-list-block1">
                  <ul className="service-list">
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Fintech</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Security</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Commerce</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Banking</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Logistics</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="service-img-block1 service-img-shadow-violet h-100">
                  <img src={serviceImg1} alt="UI/UX Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section2 start */}
        <section className="position-relative section-block service-section1 bg-white-pattern">
          <div className="container position-relative z-1">
            <div className="row flex-row-reverse">
              <div className="col-12 col-md-7 col-lg-7 ps-lg-5">
                <div className="service-title-block1 mb-4">
                  <h2 className="main-title text-capitalize">Shape the Future with an Innovative <sapn className="color-purple-lite">Augmented Reality Development</sapn> Company</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                </div>
                <div className="service-list-block1">
                  <ul className="service-list">
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Fintech</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Security</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Commerce</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Banking</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Logistics</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="service-img-block1 service-img-shadow-violet h-100">
                  <img src={serviceImg1} alt="UI/UX Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section2 end */}

        {/* Service section3 start */}
        <section className="position-relative section-block service-section1 bg-misty-rose symbol-white2">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7">
                <div className="service-title-block1 mb-4">
                  <h2 className="main-title text-capitalize">Shape the Future with an Innovative <sapn className="color-purple-lite">Augmented Reality Development</sapn> Company</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                </div>
                <div className="service-list-block1">
                  <ul className="service-list">
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Fintech</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Security</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Commerce</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Banking</h6>
                    </li>
                    <li>
                      <i className="ri-corner-down-right-fill"></i>
                      <h6>Logistics</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="service-img-block1 service-img-shadow-violet h-100">
                  <img src={serviceImg1} alt="UI/UX Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section3 end */}

        {/* CTA section1 start */}
        <section className="position-relative section-block service-section1 bg-electric-violet">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="cta-block bg-electric-violet p-0">
                  <div className="cta-content">
                    <h3 className="cta-title text-white">Lat’s make someting great together</h3>
                    <p className="cta-text text-white">Using year-over-year most design approaches and latest techs website will be lightly.</p>
                    <a href="#" className="btn btn-yellow">Get A Quote?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA section2 start */}

        {/* Service section5 start */}
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
        {/* Service section5 end */}

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
