import React from 'react';
import './../WebsiteDevelopment/WebsiteDevelopment.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import websitedevelopmentTitleImg from '../../assets/images/icons/website-development-service.svg';
import serviceImg1 from '../../assets/images/dev-1.jpg';
import serviceImg2 from '../../assets/images/dev-2.jpg';

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
          <div className="section-shape3"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative uiux-service-title">
                  <h6 className="title-label text-white">Development Service</h6>
                  <h2 className="main-title text-white text-capitalize">Website Development <span className="color-purple-lite">Service</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis necessitatibus cupiditate totam reiciendis, dicta esse voluptatibus quam expedita iste facilis aut quisquam blanditiis explicabo possimus natus dolorum nemo repellat?</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={websitedevelopmentTitleImg} alt="Website Development" className="title-icon website-development-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-ghost-white symbol-white1">
          <div className="container position-relative z-1">
            <div class="row">
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="sec-title-wrapper">
                  <h2 class="sec-title animation__char_come">Website development Company</h2>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div class="development__wrapper">
                  <div class="development__content">
                    <p>Every decision we make needs to answer the million-dollar question: how will this benefit our partner’s goal best? We work to develop solutions</p>
                    <p>We like to be different, in the same way that every mission is different. Every project is an opportunity to create result that will help you</p>
                  </div>
                  <ul>
                    <li>+ API Development</li>
                    <li>+ WordPress</li>
                    <li>+ Cloud Migration</li>
                    <li>+ Front End Development</li>
                    <li>+ JavaScript</li>
                    <li>+ Fluter Framework</li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div class="development__img radius-left-30">
                  <img src={serviceImg1} alt="Development Image" />
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="development__img radius-right-30">
                  <img src={serviceImg2} alt="Development Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section2 start */}
        <section className="position-relative section-block feature__area-2 bg-white-pattern1 pb-0">
          <div class="feature__top">
            <div class="container">
              <div class="row">
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                  <div class="sec-title-wrapper">
                    <h2 class="sec-title title-anim">Features are more helpful to create creative shapes as well.</h2>
                  </div>
                </div>
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                  <div class="feature__text text-anim">
                    <p>We are constantly rethinking the future by creating the next generation of products, brands and
                      services from a hybrid perspective. The unthinkable today becomes inevitable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="feature__btm">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="feature__list animation__feature2">
                    <div class="feature__item">
                      <img src={uiuxIcon} alt="Feature Icon" />
                      <h3 class="feature__title">Web <br /> Development</h3>
                      <p>Leverage powerful platforms and tools to build a vibrant and robust web presence.</p>
                    </div>
                    <div class="feature__item">
                      <img src={uiuxIcon} alt="Feature Icon" />
                      <h3 class="feature__title">E-commerce <br /> Development</h3>
                      <p>Take your shop online with smart tools to start trading as your brand grows.</p>
                    </div>
                    <div class="feature__item">
                      <img src={uiuxIcon} alt="Feature Icon" />
                      <h3 class="feature__title">Content <br /> Management</h3>
                      <p>Add, delete, and edit text, images, and audio/video with convenient admin controls.</p>
                    </div>
                    <div class="feature__item">
                      <img src={uiuxIcon} alt="Feature Icon" />
                      <h3 class="feature__title">Custom <br /> Development</h3>
                      <p>Build customized web solutions tailored to your specifications and brand identity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section2 end */}

        {/* Service section3 start */}
        <section className="position-relative section-block service-section3 bg-seasalt symbol-white2">
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
