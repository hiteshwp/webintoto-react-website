import React from 'react';
import './../Industries/Industries.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import industriesTitleImg from '../../assets/images/icons/industries.svg';
import serviceBanner1 from '../../assets/images/dev-1.jpg';
import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'

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
                  <h6 className="title-label text-white">Industries Service</h6>
                  <h2 className="main-title text-white text-capitalize">Industries We <span className="color-purple-lite">Work</span> With</h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem sunt reiciendis facilis quibusdam non quam ratione. Pariatur fuga deserunt incidunt dignissimos rem sit.</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={industriesTitleImg} alt="Industries" className="title-icon industries-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-lavender symbol-white1 pt-0 overflow-hidden">
          <div className="container position-relative z-1">
            <div className="industries-tab-block">
              <Tabs defaultActiveKey="ecommerce" className="mb-3">
                <Tab eventKey="ecommerce" title="eCommerce">
                  <div className="industries-content-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-title-block1 text-center">
                          <h2 className="main-title text-capitalize">eCommerce Industries</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                          <img src={serviceBanner1} alt="" className="w-100" />
                        </div>
                        <div className="csd-list-info-card bg-white">
                          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illum. Asperiores amet omnis placeat deleniti! Ipsam, enim. Illum ad deserunt, in saepe cupiditate laboriosam quis molestias ipsa inventore? Ut, natus.</h5>
                          <ul className="csd-list-info">
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="title-block industries-our-work-title">
                          <h2 className="main-title">Our Project in <br /> this <span className="color-purple-lite">Industries</span></h2>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="our-work-list-section industries-our-work-list-section">
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                          <div className="our-work-card">
                            <Link to="/our-work-details">
                              <div className="our-work-img-block">
                                <img src={ourWorkImg} alt="" />
                              </div>
                              <h3>Mental Health. For schools.</h3>
                              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="ngo" title="NGO">
                  <div className="industries-content-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-title-block1 text-center">
                          <h2 className="main-title text-capitalize">NGO Industries</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                          <img src={serviceBanner1} alt="" className="w-100" />
                        </div>
                        <div className="csd-list-info-card bg-white">
                          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illum. Asperiores amet omnis placeat deleniti! Ipsam, enim. Illum ad deserunt, in saepe cupiditate laboriosam quis molestias ipsa inventore? Ut, natus.</h5>
                          <ul className="csd-list-info">
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="user-management" title="User Management">
                  <div className="industries-content-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-title-block1 text-center">
                          <h2 className="main-title text-capitalize">User Management Industries</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                          <img src={serviceBanner1} alt="" className="w-100" />
                        </div>
                        <div className="csd-list-info-card bg-white">
                          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illum. Asperiores amet omnis placeat deleniti! Ipsam, enim. Illum ad deserunt, in saepe cupiditate laboriosam quis molestias ipsa inventore? Ut, natus.</h5>
                          <ul className="csd-list-info">
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="entertainment-industries" title="Entertainment Industries">
                  <div className="industries-content-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-title-block1 text-center">
                          <h2 className="main-title text-capitalize">Entertainment Industries</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                          <img src={serviceBanner1} alt="" className="w-100" />
                        </div>
                        <div className="csd-list-info-card bg-white">
                          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illum. Asperiores amet omnis placeat deleniti! Ipsam, enim. Illum ad deserunt, in saepe cupiditate laboriosam quis molestias ipsa inventore? Ut, natus.</h5>
                          <ul className="csd-list-info">
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="medical-industries" title="Medical Industries">
                  <div className="industries-content-block">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-title-block1 text-center">
                          <h2 className="main-title text-capitalize">Medical Industries</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto minus quo quae eaque. Aperiam corporis, eveniet libero ab suscipit consectetur ipsum. Aspernatur ab deserunt doloribus, amet laudantium quisquam expedita sit eum quibusdam debitis, laborum error accusantium itaque. Explicabo neque optio consequuntur dignissimos excepturi ea error exercitationem similique eos pariatur!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                          <img src={serviceBanner1} alt="" className="w-100" />
                        </div>
                        <div className="csd-list-info-card bg-white">
                          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, illum. Asperiores amet omnis placeat deleniti! Ipsam, enim. Illum ad deserunt, in saepe cupiditate laboriosam quis molestias ipsa inventore? Ut, natus.</h5>
                          <ul className="csd-list-info">
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                            <li>
                              <i className="ri-checkbox-circle-fill"></i>
                              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis excepturi at ullam voluptates et!</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

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
