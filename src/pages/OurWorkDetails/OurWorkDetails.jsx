import React from 'react';
import './../OurWorkDetails/OurWorkDetails.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'
import ourWorkImg1 from '../../assets/images/our-work/ourwork-img1.webp'
import ourWorkImg2 from '../../assets/images/our-work/ourwork-img2.webp'
import ourWorkLogo from '../../assets/images/client-logo/c-logo1.png'
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
                    <img src={ourWorkLogo} alt="" />
                  </div>
                  <h2 className="our-work-main-title main-title text-capitalize">Mental Health. For schools.</h2>
                </div>
              </div>
              <div className="col-12 col-8 col-lg-8 m-auto">
                <div className="service-tag-list">
                  <span className="service-tag">Branding</span>
                  <span className="service-tag">UI/UX</span>
                  <span className="service-tag">Mobile Development</span>
                  <span className="service-tag">Backend Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Our work details start */}
        <section className="position-relative section-block service-section1 bg-gray-pattern1">
          <div className="container position-relative z-1">
            <div className="row mb-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come">Bringing all functions for complete student health in one platform.</h2>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="development__wrapper">
                  <div className="development__content grid-column-0 border-0 pb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nam, aliquid nostrum vel consequuntur vero voluptate fuga animi, at doloremque aliquam quisquam. Debitis ipsum rerum doloribus obcaecati molestiae cum quisquam!</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nam, aliquid nostrum vel consequuntur vero voluptate fuga animi, at doloremque aliquam quisquam. Debitis ipsum rerum doloribus obcaecati molestiae cum quisquam!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={ourWorkImg1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={ourWorkImg2} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="our-work-img-block">
                  <img src={ourWorkImg} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={ourWorkImg1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={ourWorkImg2} alt="" />
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* Our work details end */}

        {/* Our Process start */}
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
                  <a className="btn btn-primary">Get in Touch <i className="ri-arrow-right-line ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Process end */}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
