import React from 'react';
import './../SoftwareDevelopment/SoftwareDevelopment.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import softwareDevelopmentTitleImg from '../../assets/images/icons/software-development.svg';
import serviceBanner1 from '../../assets/images/dev-1.jpg';

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
          <div className="section-shape2"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative uiux-service-title">
                  <h6 className="title-label text-white">Development Service</h6>
                  <h2 className="main-title text-white text-capitalize">Sofware Development <span className="color-purple-lite">Service</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis necessitatibus cupiditate totam reiciendis, dicta esse voluptatibus quam expedita iste facilis aut quisquam blanditiis explicabo possimus natus dolorum nemo repellat?</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={softwareDevelopmentTitleImg} alt="Software Development" className="title-icon software-development-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-misty-rose">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Software</h6>
                  <h2 className="main-title">Custom Software <br/><span className="color-purple-lite">Development</span> Services</h2>
                  <p>Accelerate your success with custom software outsourcing services, offering personalized and innovative solutions for every business need.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="service-banner-full-block">
                  <img src={serviceBanner1} alt="" className="w-100" />
                </div>
                <div className="service-content-block mt-5 text-center">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum assumenda voluptatibus voluptatum vel dignissimos error distinctio autem eaque eveniet ipsum pariatur ipsa ea sequi expedita, architecto provident ipsam dolorem, saepe laudantium nam. Quia fugit id pariatur molestiae beatae recusandae voluptatibus possimus sed totam? Quos veritatis id iusto quisquam ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum assumenda voluptatibus voluptatum vel dignissimos error distinctio autem eaque eveniet ipsum pariatur ipsa ea sequi expedita, architecto provident ipsam dolorem, saepe laudantium nam. Quia fugit id pariatur molestiae beatae recusandae voluptatibus possimus sed totam? Quos veritatis id iusto quisquam ex?</p>
                  <a class="btn btn-primary mt-4">Book Your Free Consultation <i class="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-white symbol-grey1">
          <div className="container position-relative z-1">
            <div class="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">Empowering Innovation Empowering Innovation Through Leading Custom <br/><span className="color-purple-lite">Software Development</span> Services</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi tempora cupiditate! Eum, maiores facere ipsum iusto nisi debitis ipsam iure sint, deserunt quas culpa, eius hic laborum id magnam obcaecati. Repellat incidunt doloremque sunt iure odio ea corrupti nesciunt reiciendis accusantium quod itaque eligendi corporis laudantium, adipisci obcaecati cumque?</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>Software<br /> Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>MVP <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>Enterprise Software<br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>Blockchain <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>AI <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4">
                <div className="serviceCardBlock serviceCardRed">
                  <h3>API <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section3 start */}
        <section className="position-relative section-block service-section3 bg-seasalt">
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
                <div class="workflow__wrapper-6">
                  <div class="row">
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div class="workflow__slide-6">
                        <h6 class="workflow__title-6">Planning and <br />sketching</h6>
                        <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                        </p>
                      </div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div class="workflow__slide-6">
                        <h6 class="workflow__title-6">Team <br />working</h6>
                        <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                        </p>
                      </div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div class="workflow__slide-6">
                        <h6 class="workflow__title-6">Flowchart and <br />wireframe</h6>
                        <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                        </p>
                      </div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div class="workflow__slide-6">
                        <h6 class="workflow__title-6">User experience <br />Testing</h6>
                        <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                        </p>
                      </div>
                    </div>
                  </div>
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
