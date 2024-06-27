import React from 'react';
import './../OurStory/OurStory.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

import seoTitleImg from '../../assets/images/icons/seo.svg';
import serviceBanner1 from '../../assets/images/Leads-and-Sales-Report.webp';

import uiuxIcon from '../../assets/images/icons/ux-design.png'
import webProgrammingIcon from '../../assets/images/icons/web-programming.png'
import mobileDevelopmentIcon from '../../assets/images/icons/mobile-development.png'
import softwareDevelopmentIcon from '../../assets/images/icons/software-development.png'
import blockChainIcon from '../../assets/images/icons/blockchain.png'

import marketResearch from '../../assets/images/icons/market-research-icon.webp'
import marketingAssessment from '../../assets/images/icons/marketing-assessment-icon.webp'
import strategicPositioning from '../../assets/images/icons/strategic-positioning-icon.webp'
import targetMarketing from '../../assets/images/icons/target-marketing-icon.webp'
import marketingPlan from '../../assets/images/icons/marketing-plan-development-icon.webp'
import socialMedia from '../../assets/images/icons/social-media-consulting-icon.webp'

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
                  <h2 className="main-title text-white text-capitalize">SEO <span className="color-purple-lite">Service</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis necessitatibus cupiditate totam reiciendis, dicta esse voluptatibus quam expedita iste facilis aut quisquam blanditiis explicabo possimus natus dolorum nemo repellat?</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={seoTitleImg} alt="SEO" className="title-icon seo-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Service section1 start */}
        <section className="position-relative section-block service-section1 bg-white-pattern">
          <div className="container position-relative z-1">
            <div className="serviceFullCardBlock bg-lavender mb-5">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="service-title-block1 p-4">
                    <h2 className="main-title text-capitalize">Increasing Organic Search Traffic to generate more <sapn className="color-purple-lite">Leads and Sales</sapn></h2>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="service-img-block1 img-shadow-none h-100">
                    <img src={serviceBanner1} alt="Service Banner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="serviceFullCardBlock bg-pink mb-5">
              <div className="row flex-row-reverse align-items-center">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="service-title-block1 p-4">
                    <h2 className="main-title text-capitalize">Increasing Organic Search Traffic to generate more <sapn className="color-purple-lite">Leads and Sales</sapn></h2>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae assumenda, dicta veritatis placeat blanditiis veniam, quod a quis aliquid, ducimus cum deleniti voluptatum! Sint quisquam eaque sed harum sapiente iure facilis earum, soluta iste eveniet itaque, quod, temporibus accusantium modi quaerat accusamus nobis ipsa alias voluptatibus. Sunt, molestias officia!</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="service-img-block1 img-shadow-none h-100">
                    <img src={serviceBanner1} alt="Service Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section1 end */}

        {/* Service section2 start */}
        <section className="position-relative section-block service-section1 bg-ghost-white">
          <div className="container position-relative z-1">
            <div class="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">Our Result-Focused & Cost-Effective <br/><span className="color-purple-lite">Organic SEO</span></h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi tempora cupiditate! Eum, maiores facere ipsum iusto nisi debitis ipsam iure sint, deserunt quas culpa, eius hic laborum id magnam obcaecati. Repellat incidunt doloremque sunt iure odio ea corrupti nesciunt reiciendis accusantium quod itaque eligendi corporis laudantium, adipisci obcaecati cumque?</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={marketResearch} alt="" />
                  </div>
                  <h3>Market<br /> Research</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={marketingAssessment} alt="" />
                  </div>
                  <h3>Marketing <br /> Assessment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={strategicPositioning} alt="" />
                  </div>
                  <h3>Strategic<br /> Positioning</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={targetMarketing} alt="" />
                  </div>
                  <h3>Target <br /> Marketing</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4 mb-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={marketingPlan} alt="" />
                  </div>
                  <h3>Marketing Plan <br /> Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-4">
                <div className="serviceCardBlock">
                  <div className="serviceCardIcon">
                    <img src={socialMedia} alt="" />
                  </div>
                  <h3>Social Media <br /> Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas, facere voluptas harum blanditiis voluptatem explicabo optio minus quis culpa.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="serviceCardActionBlock d-flex justify-content-center mt-5">
                  <a href="" className="btn btn-primary">Let's Discuss <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service section2 end */}

        {/* Service section4 start */}
        <section className="position-relative section-block bg-papaya-whip symbol-white2">
          <div className="container position-relative z-1">
            <div className="row justify-content-center d-flex">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="serviceCenterBlock text-center">
                  <h4>The Future of Hybrid Projects with Digital Marketing</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cum fugiat eligendi assumenda? Quam assumenda, repudiandae error aperiam architecto ipsam, explicabo qui ipsa nihil hic voluptatem suscipit accusantium quidem nam iure recusandae maiores? Labore voluptate, esse, nobis veniam ipsum, quae ullam corrupti cum iure sed vel ad incidunt totam autem officia. Magnam perferendis, hic labore, maiores, omnis maxime sed ad repellendus reprehenderit minus reiciendis consectetur quasi dolor. Adipisci aut nobis laborum. Exercitationem laudantium magnam commodi sit rem nam deserunt. Tenetur pariatur corrupti sint. Totam illo est impedit suscipit explicabo reprehenderit vitae laboriosam! Earum voluptas necessitatibus, laudantium nostrum commodi maxime quisquam.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis nobis sit eveniet dolore, maiores sed quisquam omnis earum iste unde dolorum deserunt sint maxime ullam hic a quibusdam expedita velit assumenda qui? Nihil vel, hic incidunt rerum, tempora reprehenderit perspiciatis magni odio corrupti voluptatum quibusdam voluptas! Dicta, delectus quaerat.</p>
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
