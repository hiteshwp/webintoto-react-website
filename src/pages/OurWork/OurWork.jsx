import React from 'react';
import './../OurWork/OurWork.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Link } from 'react-router-dom';

import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'
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
                <div className="title-block">
                  <h6 className="title-label">Our Work</h6>
                  <h2 className="our-work-main-title main-title text-capitalize">Take a look at what <br /><span className="color-purple-lite">we've done</span> for our partners</h2>
                </div>
              </div>
              <div className="col-12 col-8 col-lg-8 m-auto">
                <div className="our-work-text-info">
                  <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati officia consequuntur, quod pariatur explicabo quisquam, dolorum, dignissimos adipisci laborum corporis dolores. Doloribus quae itaque ad possimus, beatae voluptate commodi. Non impedit repellat velit quia itaque sapiente cumque corrupti dolor asperiores minima deleniti, provident saepe perspiciatis illo labore iste ut!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Our work listing section start */}
        <section className="position-relative section-block bg-gray-pattern1 our-work-list-section">
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
          <div className="our-work-card">
            <Link to="/our-work-details">
              <div className="our-work-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <h3>Mental Health. For schools.</h3>
              <p>Branding, UI/UX, Mobile Development, Backend Development</p>
            </Link>
          </div>
        </section>
        {/* Our work listing section end */}

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
