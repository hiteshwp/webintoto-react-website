import React from 'react'
import "./../Home/Home.css";
import Header from './../../layouts/Header/Header';
import Footer from './../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import heroBG1 from '../../assets/images/1-bg.png'
import heroDownArrow from '../../assets/images/arrow-down-big.png'
import clientLogo1 from '../../assets/images/client-logo/c-logo1.png'
import clientLogo2 from '../../assets/images/client-logo/c-logo2.png'
import clientLogo3 from '../../assets/images/client-logo/c-logo3.png'
import clientLogo4 from '../../assets/images/client-logo/c-logo4.png'
import clientLogo5 from '../../assets/images/client-logo/c-logo5.png'
import clientLogo6 from '../../assets/images/client-logo/c-logo6.png'
import clientLogo7 from '../../assets/images/client-logo/c-logo7.png'
import homeAbout from '../../assets/images/about-img1.jpg'
import symbol1 from '../../assets/images/symbol-white.svg'
import uiuxIcon from '../../assets/images/icons/ux-design.png'
import webProgrammingIcon from '../../assets/images/icons/web-programming.png'
import mobileDevelopmentIcon from '../../assets/images/icons/mobile-development.png'
import softwareDevelopmentIcon from '../../assets/images/icons/software-development.png'
import blockChainIcon from '../../assets/images/icons/blockchain.png'
import arVrIcon from '../../assets/images/icons/ar-vr.png'
import iotIcon from '../../assets/images/icons/iot.png'
import digitalMarketingIcon from '../../assets/images/icons/digital-marketing.png'
import seoIcon from '../../assets/images/icons/seo.png'
import html from '../../assets/images/tech-logo/html.png'
import css from '../../assets/images/tech-logo/css.png'
import wordpress from '../../assets/images/tech-logo/wordpress.png'
import php from '../../assets/images/tech-logo/php.png'
import laravel from '../../assets/images/tech-logo/laravel.png'
import codeigniter from '../../assets/images/tech-logo/codeigniter.png'
import angular from '../../assets/images/tech-logo/angular.png'
import react from '../../assets/images/tech-logo/react-native.png'
import flutter from '../../assets/images/tech-logo/flutter.png'
import apple from '../../assets/images/tech-logo/apple.png'
import android from '../../assets/images/tech-logo/android.png'

const Home = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}

      <div className="mainSection">
        {/* Top banner section start */}
        <section className="position-relative section-block hero__area d-flex align-items-center p-0 bg-dark">
          <div className="heroHome-slider swiper-container">
            <div className="align-items-center">
              <div className="container">
                <Carousel interval={5000} slide={3}>
                  <Carousel.Item>
                    <div className="hero__title-wrapper d-flex flex-column justify-content-center text-left text-white">
                      <small className="mb-3">We Deliver</small>
                      <h1 className="mb-3">World-class Digital Solutions</h1>
                      <p className="hero__sub-title">With every single one of our clients, we bring forth deep passion for <span className="text-white">creative problem solving</span> which is what we deliver.</p>
                      <div className="text-left">
                        <a href="#" className="btn btn-primary">Get a Quote in 24 Hours <i className="ri-arrow-right-line ms-2"></i></a>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="hero__title-wrapper d-flex flex-column justify-content-center text-left text-white">
                      <small className="mb-3">We Deliver</small>
                      <h1 className="mb-3">World-class Digital Solutions</h1>
                      <p className="hero__sub-title">With every single one of our clients, we bring forth deep passion for <span className="text-white">creative problem solving</span> which is what we deliver.</p>
                      <div className="text-left">
                        <a href="#" className="btn btn-primary">Get a Quote in 24 Hours <i className="ri-arrow-right-line ms-2"></i></a>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel> 
                <img src={heroDownArrow} alt="Down Arrow" className="hero_down_arrow" />
              </div>
            </div>
          </div>
          <img src={heroBG1} alt="hero BG" className="hero1_bg" />
        </section>
        {/* Top banner section end */}

        {/* USP Counter and About section start */}
        <section className="position-relative section-block home-about-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Solution</h6>
                  <h2 className="main-title">The Best Solution Agency <br /> For <span className="color-purple-lite">Your Business</span></h2>
                  <p className="title-description">Being a Web development company, we help Startups, Mid-Size, and Enterprise businesses to get their digital products done the right way on time.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="counter-wrapper mt-3">
                  <div className="counter-item">
                    <h2 className="counter-number">15</h2>
                    <p>Years experiences</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">189+</h2>
                    <p>Project Completed</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">99%</h2>
                    <p>Successful projects</p>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter-number">150+</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="client-logo-wrapper">
                    <div className="client-logo-item">
                      <img src={clientLogo1} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo2} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo3} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo4} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo5} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo6} alt="Client Logo" />
                    </div>
                    <div className="client-logo-item">
                      <img src={clientLogo7} alt="Client Logo" />
                    </div>
                  </div>
                </div>
            </div>
            <div className="row home-about-wrap">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="home-about-content-block ps-0">
                  <h6>What We Do, What You Get</h6>
                  <h3>Fresh Ideas. <br/> Thoughtful Design.</h3>
                  <p>Welcome to WebInToTo! As the name suggests we provide all services that help to enhance the performance of your brand online.</p>
                  <div className="list-icons">
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Our Experience</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">We are catering to this industry for more than 7 years successfully. We enlarged our services to many companies with IT-related requirements.</p>
                    </div>
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Dedicated and Proficient Team</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">Our experienced and passionate team members are having years of experience in the respective industry. Their expertise and knowledge increase our strength to serve our clients.</p>
                    </div>
                    <div className="item-icon">
                      <span className="icon-left"><i className="ri-tent-line"></i></span>
                      <h4 className="text-heading-4">Versatility to serve you better</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">We have the expertise and experience that help brands to uplift the graph of success upwards and take their business to an elevated level in the competitive market.</p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-secondary">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="home-about-img-block">
                  <img src={homeAbout} alt="About Us" className="home-about-img" />
                  <img src={symbol1} alt="Symbol" className="home-about-logo-symbol" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* USP Counter and About section end */}

        {/* Service section start */}
        <section className="position-relative section-block service-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h6 className="title-label">Our Expertise</h6>
                  <h2 className="main-title">Technologies<br /> we are <span className="color-purple-lite">WEBINTOTO</span> with</h2>
                  <p className="title-description">Best-in-class services behind better customer experiences</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-1">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={uiuxIcon} alt="UI/UX" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">UI/UX</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={uiuxIcon} alt="UI/UX" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-2">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={webProgrammingIcon} alt="Website Development" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Website Development</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={webProgrammingIcon} alt="Website Development" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-3">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={mobileDevelopmentIcon} alt="Mobile Application" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Mobile Application</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={mobileDevelopmentIcon} alt="Mobile Application" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-4">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={softwareDevelopmentIcon} alt="Software Development" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Software Development</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={softwareDevelopmentIcon} alt="Software Development" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-5">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={blockChainIcon} alt="Blockchain" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Blockchain</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={blockChainIcon} alt="Blockchain" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-6">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={arVrIcon} alt="AR/VR" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">AR/VR</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={arVrIcon} alt="AR/VR" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-7">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={iotIcon} alt="IOT" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">IOT</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={iotIcon} alt="IOT" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-8">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={digitalMarketingIcon} alt="Digital Marketing" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">Digital Marketing</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={digitalMarketingIcon} alt="Digital Marketing" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="service-card-block sc-bg-9">
                  <div className="service-card-icon-wrapper">
                    <span className="service-card-icon">
                      <img src={seoIcon} alt="SEO" />
                    </span>
                  </div>
                  <div className="service-card-content">
                    <h4 className="service-card-title">SEO</h4>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, vet elit at consectetur adipiscing elit. liqua vel cur magna, Curabitur at enisus</p>
                    <a href="#" className="btn btn-white">Learn More <i className="ri-arrow-right-line ms-2"></i></a>
                  </div>
                  <div className="service-card-icon-bottom">
                    <span className="service-card-icon">
                      <img src={seoIcon} alt="SEO" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="cta-block">
                  <div className="cta-content">
                    <h3 className="cta-title">Lat’s make someting great together</h3>
                    <p className="cta-text">Using year-over-year most design approaches and latest techs website will be lightly.</p>
                    <a href="#" className="btn btn-primary">Get A Quote?</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="technology-block">
                  <ul className="technology-list-block">
                    <li className="technology-item-block">
                      <img src={html} alt="HTML" />
                      <span className="techTitle">HTML</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={css} alt="CSS" />
                      <span className="techTitle">CSS</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={wordpress} alt="Wordpress" />
                      <span className="techTitle">Wordpress</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={php} alt="php" />
                      <span className="techTitle">php</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={laravel} alt="Laravel" />
                      <span className="techTitle">Laravel</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={codeigniter} alt="Codeigniter" />
                      <span className="techTitle">Codeigniter</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={angular} alt="Angular" />
                      <span className="techTitle">Angular</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={react} alt="React" />
                      <span className="techTitle">React</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={flutter} alt="Flutter" />
                      <span className="techTitle">Flutter</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={apple} alt="iOS" />
                      <span className="techTitle">iOS</span>
                    </li>
                    <li className="technology-item-block">
                      <img src={android} alt="Android" />
                      <span className="techTitle">Android</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section end */}

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
      <Footer />
      {/* Footer section end */}
    </>
  )
}

export default Home
