import React from 'react';
import './../Technologies/Technologies.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import technologiesTitleImg from '../../assets/images/icons/technologies.svg';
import serviceImg1 from '../../assets/images/dev-1.jpg';

import appleIcon from '../../assets/images/technologies/apple.png';
import androidIcon from '../../assets/images/technologies/android.png';
import flutterIcon from '../../assets/images/technologies/flutter.png';
import reactNativeIcon from '../../assets/images/technologies/react-native.png';
import ionicIcon from '../../assets/images/technologies/ionic.png';

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
                  <img src={technologiesTitleImg} alt="Technologies" className="title-icon technologies-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-lavender symbol-white1">
          <div className="container position-relative z-1">
            <div className="row mb-5">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come">Technology Consulting Company</h2>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="development__wrapper">
                  <div className="development__content grid-column-0 border-0 pb-0">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed vitae quaerat numquam? Est repellat nam, earum odio aut officiis?</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="service-banner-full-block seasaltshad-service-banner mt-5 mb-5">
                  <img src={serviceImg1} alt="" className="w-100" />
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xxl-12">
                  <div className="sec-title-wrapper wrap">
                      <h3 className="sec-title mb-4">Mobile</h3>
                  </div>
              </div>
              <div className="col-xxl-12">
                  <div className="brand__list">
                      <div className="brand__item">
                          <Link to="/technologies-details">
                            <img src={appleIcon} alt="ios" />
                            <span className="technoTitle">iOS</span>
                          </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={androidIcon} alt="Android" />
                          <span className="technoTitle">Android</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={reactNativeIcon} alt="React Native" />
                          <span className="technoTitle">React Native</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={flutterIcon} alt="Flutter" />
                          <span className="technoTitle">Flutter</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={ionicIcon} alt="ionic" />
                          <span className="technoTitle">Ionic</span>
                        </Link>
                      </div>
                  </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xxl-12">
                  <div className="sec-title-wrapper wrap">
                      <h3 className="sec-title mb-4">Web Technology</h3>
                  </div>
              </div>
              <div className="col-xxl-12">
                  <div className="brand__list">
                      <div className="brand__item">
                          <Link to="/technologies-details">
                            <img src={appleIcon} alt="ios" />
                            <span className="technoTitle">iOS</span>
                          </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={androidIcon} alt="Android" />
                          <span className="technoTitle">Android</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={reactNativeIcon} alt="React Native" />
                          <span className="technoTitle">React Native</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={flutterIcon} alt="Flutter" />
                          <span className="technoTitle">Flutter</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={ionicIcon} alt="ionic" />
                          <span className="technoTitle">Ionic</span>
                        </Link>
                      </div>
                  </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xxl-12">
                  <div className="sec-title-wrapper wrap">
                      <h3 className="sec-title mb-4">eCommerce</h3>
                  </div>
              </div>
              <div className="col-xxl-12">
                  <div className="brand__list">
                      <div className="brand__item">
                          <Link to="/technologies-details">
                            <img src={appleIcon} alt="ios" />
                            <span className="technoTitle">iOS</span>
                          </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={androidIcon} alt="Android" />
                          <span className="technoTitle">Android</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={reactNativeIcon} alt="React Native" />
                          <span className="technoTitle">React Native</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={flutterIcon} alt="Flutter" />
                          <span className="technoTitle">Flutter</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={ionicIcon} alt="ionic" />
                          <span className="technoTitle">Ionic</span>
                        </Link>
                      </div>
                  </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xxl-12">
                  <div className="sec-title-wrapper wrap">
                      <h3 className="sec-title mb-4">CMS</h3>
                  </div>
              </div>
              <div className="col-xxl-12">
                  <div className="brand__list">
                      <div className="brand__item">
                          <Link to="/technologies-details">
                            <img src={appleIcon} alt="ios" />
                            <span className="technoTitle">iOS</span>
                          </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={androidIcon} alt="Android" />
                          <span className="technoTitle">Android</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={reactNativeIcon} alt="React Native" />
                          <span className="technoTitle">React Native</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={flutterIcon} alt="Flutter" />
                          <span className="technoTitle">Flutter</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={ionicIcon} alt="ionic" />
                          <span className="technoTitle">Ionic</span>
                        </Link>
                      </div>
                  </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-xxl-12">
                  <div className="sec-title-wrapper wrap">
                      <h3 className="sec-title mb-4">Digital Marketing</h3>
                  </div>
              </div>
              <div className="col-xxl-12">
                  <div className="brand__list">
                      <div className="brand__item">
                          <Link to="/technologies-details">
                            <img src={appleIcon} alt="ios" />
                            <span className="technoTitle">iOS</span>
                          </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={androidIcon} alt="Android" />
                          <span className="technoTitle">Android</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={reactNativeIcon} alt="React Native" />
                          <span className="technoTitle">React Native</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={flutterIcon} alt="Flutter" />
                          <span className="technoTitle">Flutter</span>
                        </Link>
                      </div>
                      <div className="brand__item">
                        <Link to="/technologies-details">
                          <img src={ionicIcon} alt="ionic" />
                          <span className="technoTitle">Ionic</span>
                        </Link>
                      </div>
                  </div>
              </div>
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
