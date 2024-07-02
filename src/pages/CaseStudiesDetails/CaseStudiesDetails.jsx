import React from 'react';
import './../CaseStudiesDetails/CaseStudiesDetails.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import csBannerImg1 from '../../assets/images/Leads-and-Sales-Report.webp'
import serviceBanner1 from '../../assets/images/dev-1.jpg';
import ourProcess from '../../assets/images/process-steps-img.svg';

const Services = () => {
  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="title-block mb-0 text-left cs-top-banner-block">
                  <h2 className="main-title text-white text-capitalize">We helped with developing comprehensive support solutions for internal processes.</h2>
                  <h6 className="main-sub-title text-white">See how Webintoto has helped its clients achieve their vision of digital innovation</h6>
                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem ad quo molestiae, tenetur cupiditate rem mollitia vitae aliquid officiis, iusto quasi reiciendis odio, eveniet nostrum quod doloribus corporis excepturi.</p>

                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem ad quo molestiae, tenetur cupiditate rem mollitia vitae aliquid officiis, iusto quasi reiciendis odio, eveniet nostrum quod doloribus corporis excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore?</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="cs-top-banner-img">
                  <img src={csBannerImg1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        {/* Case study details section1 start */}
        <section className="position-relative section-block bg-white-pattern">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">The Challenge</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum molestias voluptatum ipsum sapiente sequi aliquam quas dolores quia ab, non impedit reiciendis vitae voluptatem quae quos debitis aut! Maiores neque voluptas, quod possimus, asperiores voluptatum, laboriosam fuga nemo vitae quos atque adipisci minus tenetur aspernatur harum doloribus officiis et.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="service-banner-full-block seasaltshad-service-banner mb-5">
                  <img src={serviceBanner1} alt="" className="w-100" />
                </div>
                <div className="csd-list-info-card bg-seasalt">
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
        </section>
        {/* Case study details section1 end */}

        {/* Case study details section2 start */}
        <section className="position-relative section-block bg-seasalt">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">The Solution</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum molestias voluptatum ipsum sapiente sequi aliquam quas dolores quia ab, non impedit reiciendis vitae voluptatem quae quos debitis aut! Maiores neque voluptas, quod possimus, asperiores voluptatum, laboriosam fuga nemo vitae quos atque adipisci minus tenetur aspernatur harum doloribus officiis et.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="service-banner-full-block whiteshad-service-banner mb-5">
                  <img src={serviceBanner1} alt="" className="w-100" />
                </div>
                <div className="csd-list-info-card bg-white">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo doloribus officiis illum necessitatibus, eius aliquam sed nulla sint facere earum repellat voluptatibus quidem ullam facilis autem? Laudantium asperiores porro pariatur. Quos eaque quidem ipsa, ipsam nostrum porro aut est saepe aperiam harum deserunt, assumenda magni tempore, quibusdam vel. Natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo consectetur sunt illum assumenda laborum laboriosam incidunt illo inventore a aspernatur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case study details section2 end */}

        {/* Case study details section3 start */}
        <section className="position-relative section-block bg-white-pattern">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">The Results</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum molestias voluptatum ipsum sapiente sequi aliquam quas dolores quia ab, non impedit reiciendis vitae voluptatem quae quos debitis aut! Maiores neque voluptas, quod possimus, asperiores voluptatum, laboriosam fuga nemo vitae quos atque adipisci minus tenetur aspernatur harum doloribus officiis et.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="csd-info-list-card-block">
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni libero adipisci vitae ex dolores voluptatum nobis fugit in atque esse.</h4>
                  <ul className="csd-info-list-card">
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                    <li className="bg-lavender">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta at aliquam tempore quod inventore!</p>
                    </li>
                  </ul>
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus consequatur in fugit natus ut odit tenetur, eos eligendi laboriosam quas alias ab provident! Debitis corrupti neque temporibus sequi voluptatum!</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case study details section3 end */}

        {/* Case study details section4 start */}
        <section className="position-relative section-block bg-seasalt">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2 className="main-title">All Screens</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="our-work-img-block">
                  <img src={serviceBanner1} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="cta-block bg-white">
                  <div className="cta-content">
                    <h3 className="cta-title">Lat’s make someting great together</h3>
                    <p className="cta-text">Using year-over-year most design approaches and latest techs website will be lightly.</p>
                    <a href="#" className="btn btn-primary">Get A Quote?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case study details section4 end */}

      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
