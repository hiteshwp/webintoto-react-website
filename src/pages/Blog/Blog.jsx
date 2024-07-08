import React from 'react';
import './../Blog/Blog.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Link } from 'react-router-dom';

import blogTitleImg from '../../assets/images/icons/blog.svg';
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
                  <h6 className="title-label text-white">Blog</h6>
                  <h2 className="main-title text-white text-capitalize">Fueling Growth through <span className="color-purple-lite">Innovation and Creativity</span></h2>
                  <p className="title-description text-white ms-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem sunt reiciendis facilis quibusdam non quam ratione. Pariatur fuga deserunt incidunt dignissimos rem sit.</p>
                  <a href="#" className="btn btn-yellow">Schedule a Free Consultation!</a>
                  <img src={blogTitleImg} alt="Blog" className="title-icon blog-title-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Our work listing section start */}
        <section className="position-relative section-block bg-gray-pattern1 blog-list-section">
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
          <div className="blog-card">
            <Link to="/blog-details">
              <div className="blog-img-block">
                <img src={ourWorkImg} alt="" />
              </div>
              <div className="blog-date"><i class="ri-stop-large-fill"></i> <span>05 July 2024</span></div>
              <h3>How Much Does it Cost to Build an App Like Airbnb in 2024?</h3>
            </Link>
          </div>
        </section>
        {/* Our work listing section end */}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
