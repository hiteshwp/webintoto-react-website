import React from 'react';
import './../Blockchain/Blockchain.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import blockchainTitleImg from '../../assets/images/icons/blockchain.svg';
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
          <div className="section-shape2"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block1 position-relative uiux-service-title">
                  <h6 className="title-label text-white">Development</h6>
                  <h2 className="main-title text-white text-capitalize">Blockchain Development <span className="color-purple-lite">Service</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis necessitatibus cupiditate totam reiciendis, dicta esse voluptatibus quam expedita iste facilis aut quisquam blanditiis explicabo possimus natus dolorum nemo repellat?</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={blockchainTitleImg} alt="Blockchain" className="title-icon blockchain-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-white">
          <div className="container position-relative z-1">
            <div className="row mb-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come">Blockchain Development Company Empowering Businesses</h2>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="development__wrapper">
                  <div className="development__content grid-column-0 border-0 pb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nam, aliquid nostrum vel consequuntur vero voluptate fuga animi, at doloremque aliquam quisquam. Debitis ipsum rerum doloribus obcaecati molestiae cum quisquam!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain <br /> Supply Chain</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Enterprise <br /> Blockchain</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain <br /> Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Co Development <br /> Model</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Smart Contract <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain <br /> Decentralization</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>E-Wallet <br /> Platform</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain Cloud <br /> Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section2 start */}
        <section className="position-relative section-block service-section1 bg-lavender">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7">
              <div className="service-title-block1 mb-4">
                  <h2 className="main-title text-capitalize">Reliable and Secure Blockchain Development Solutions</h2>
                  <p>Our cutting-edge blockchain development company assists diverse clients in building impactful applications for various industries.</p>
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
        <section className="position-relative section-block service-section1 bg-white-pattern">
          <div className="container position-relative z-1">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-8">
                <div className="title-block text-left">
                  <h2 className="main-title">Success-Driven Blockchain Development Process</h2>
                  <p>Leverage our refined process for rapid testing and early product maturity, transforming your ideas into scalable and robust applications. Our tailored process is optimized to deliver solutions adaptable to changes in the blockchain industry.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain<br /> Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Experience <br /> and Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Enterprise<br /> Blockchain</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain <br /> Deployment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Blockchain <br /> Maintenance</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4">
                <div className="serviceCardBlock serviceCardViolet">
                  <h3>Migration <br /> and Upgrades</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section3 end */}

        {/* Service section4 start */}
        <section className="position-relative section-block bg-electric-violet symbol-white2">
          <div className="container">
            <div className="row justify-content-center d-flex">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="serviceCenterBlock">
                  <h4 className="text-white">The Future of Hybrid Projects with Blockchain</h4>
                  <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cum fugiat eligendi assumenda? Quam assumenda, repudiandae error aperiam architecto ipsam, explicabo qui ipsa nihil hic voluptatem suscipit accusantium quidem nam iure recusandae maiores? Labore voluptate, esse, nobis veniam ipsum, quae ullam corrupti cum iure sed vel ad incidunt totam autem officia. Magnam perferendis, hic labore, maiores, omnis maxime sed ad repellendus reprehenderit minus reiciendis consectetur quasi dolor. Adipisci aut nobis laborum. Exercitationem laudantium magnam commodi sit rem nam deserunt. Tenetur pariatur corrupti sint. Totam illo est impedit suscipit explicabo reprehenderit vitae laboriosam! Earum voluptas necessitatibus, laudantium nostrum commodi maxime quisquam.</p>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis nobis sit eveniet dolore, maiores sed quisquam omnis earum iste unde dolorum deserunt sint maxime ullam hic a quibusdam expedita velit assumenda qui? Nihil vel, hic incidunt rerum, tempora reprehenderit perspiciatis magni odio corrupti voluptatum quibusdam voluptas! Dicta, delectus quaerat.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex">
              <div className="col-12 col-md-10 col-lg-9">
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
          </div>
        </section>
        {/* Service section4 end */}

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
