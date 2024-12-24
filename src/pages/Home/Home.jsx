import React, { useState, useEffect } from 'react';
import "./../Home/Home.css";
import Header from './../../layouts/Header/Header';
import Footer from './../../layouts/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import heroBG1 from '../../assets/images/1-bg.png'
import heroDownArrow from '../../assets/images/arrow-down-big.png'
import symbol1 from '../../assets/images/symbol-white.svg'
import testimonialUser from '../../assets/images/team/team-img-1.jpg'

import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [contentSection, setContentSection] = useState(null);
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    setContentSection(true);
    setError(null);

    try {
      const data = {
        page_name: 'home',
      };
      const result = await axios.post(`${API_BASE_URL}/home`, data);
      setContentSection(result?.data?.sections || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const renderSection = (section) => {
    const sectiondata = section.section_data;
    switch (section.section_title) 
    {
      case 'top_slider_section':
        return <section className="position-relative section-block hero__area d-flex align-items-center p-0 bg-dark">
                <div className="heroHome-slider swiper-container">
                  <div className="align-items-center">
                    <div className="container">
                      <Carousel interval={5000} slide={2}>
                        {sectiondata?.slider_listing?.map(item => (
                          <Carousel.Item key={item.uid}>
                            <div className="hero__title-wrapper d-flex flex-column justify-content-center text-left text-white">
                              <small className="mb-3">{item?.acf_flx_hp_tss_listing_title}</small>
                              <h1 className="mb-3">{item?.acf_flx_hp_tss_listing_sub_title}</h1>
                              <p className="hero__sub-title" dangerouslySetInnerHTML={{ __html: item?.acf_flx_hp_tss_listing_content }}></p>
                              <div className="text-left">
                                <a href={item?.acf_flx_hp_tss_listing_button_url} className="btn btn-primary">{item?.acf_flx_hp_tss_listing_button_title} <i className="ri-arrow-right-line ms-2"></i></a>
                              </div>
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel> 
                      <img src={heroDownArrow} alt="Down Arrow" className="hero_down_arrow" />
                    </div>
                  </div>
                </div>
                <img src={heroBG1} alt="hero BG" className="hero1_bg" />
              </section>;
      case 'solution_section':
        return <section className="position-relative section-block home-about-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.acf_flx_hp_ss_section_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_hp_ss_section_sub_title }}></h2>
                        <p className="title-description">{sectiondata?.acf_flx_hp_ss_section_content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="counter-wrapper mt-3">
                        {sectiondata?.counter_stats_listing?.map(item => (
                          <div className="counter-item" key={item.uid}>
                            <h2 className="counter-number">{item.acf_flx_hp_ss_listing_value}</h2>
                            <p>{item.acf_flx_hp_ss_listing_title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="client-logo-wrapper">
                        {sectiondata?.client_logos?.map(item => (
                          <div className="client-logo-item" key={item?.uid}>
                            <img src={item?.listing_image?.image_url} alt={item?.listing_image?.image_alt} />
                          </div>
                        ))}
                        </div>
                      </div>
                  </div>
                </div>
              </section>;
      case 'what_we_do_section':
        return <section className="position-relative section-block home-about-section">
                <div className="container">                  
                  <div className="row home-about-wrap">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="home-about-content-block ps-0">
                        <h6>{sectiondata?.acf_flx_hp_wwds_section_title}</h6>
                        <h3 dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_hp_wwds_section_sub_title }}></h3>
                        <p>{sectiondata?.acf_flx_hp_wwds_section_content}</p>
                        <div className="list-icons">
                        {sectiondata?.content_listing?.map(item => (
                          <div className="item-icon" key={item?.uid}>
                            <span className="icon-left"><i className="ri-tent-line"></i></span>
                            <h4 className="text-heading-4">{item?.acf_flx_hp_wwds_listing_title}</h4>
                            <p className="text-body-excerpt color-gray-600 mt-15">{item?.acf_flx_hp_wwds_lisrting_content}</p>
                          </div>
                        ))}
                        </div>
                        <a href={sectiondata?.acf_flx_hp_wwds_learn_more_url} className="btn btn-secondary">{sectiondata?.acf_flx_hp_wwds_learn_more_title} <i className="ri-arrow-right-line ms-2"></i></a>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="home-about-img-block">
                        <img src={sectiondata?.acf_flx_hp_wwds_section_image?.image_url} alt={sectiondata?.acf_flx_hp_wwds_section_image?.image_alt} className="home-about-img" />
                        <img src={symbol1} alt="Symbol" className="home-about-logo-symbol" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'our_technology_section':
        return <section className="position-relative section-block service-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.section_content?.acf_flx_hp_ots_secrtion_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.section_content?.acf_flx_hp_ots_section_sub_title }}></h2>
                        <p className="title-description">{sectiondata?.section_content?.acf_flx_hp_ots_section_content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {sectiondata?.section_listing?.map((item) => (
                      <div className="col-12 col-md-6 col-lg-4" key={item?.uid}>
                        <div className={`service-card-block sc-bg-${item?.bak_color_id}`}>
                          <div className="service-card-icon-wrapper">
                            <span className="service-card-icon">
                              <img src={item?.post_image?.image_url} alt={item?.post_image?.image_alt} />
                            </span>
                          </div>
                          <div className="service-card-content">
                            <h4 className="service-card-title">{item?.post_title}</h4>
                            <p className="service-card-text">{item?.post_content}</p>
                            <Link className="btn btn-white" to={item?.post_slug}>Learn More <i className="ri-arrow-right-line ms-2"></i></Link>
                          </div>
                          <div className="service-card-icon-bottom">
                            <span className="service-card-icon">
                              <img src={item?.post_image?.image_url} alt={item?.post_image?.image_alt} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}                    
                  </div>
                </div>
              </section>;
      case 'lets_make_something_section':
        return <section className="position-relative section-block service-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="cta-block">
                        <div className="cta-content">
                          <h3 className="cta-title">{sectiondata?.acf_flx_hp_lmss_section_title}</h3>
                          <p className="cta-text">{sectiondata?.acf_flx_hp_lmss_section_sub_title}</p>
                          <a href={sectiondata?.acf_flx_hp_lmss_section_link_url} className="btn btn-primary">{sectiondata?.acf_flx_hp_lmss_section_link_title}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'client_logos_section':
        return <section className="position-relative section-block service-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="technology-block">
                        <ul className="technology-list-block">
                          {sectiondata?.client_logo_listing?.map(item => (
                            <li className="technology-item-block" key={item?.uid}>
                              <img src={item?.acf_flx_hp_cls_listing_image?.image_url} alt={item?.acf_flx_hp_cls_listing_image?.image_alt}/>
                              <span className="techTitle">{item?.acf_flx_hp_cls_listing_title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'client_testimonial_section':
        return <section className="position-relative section-block testimonial-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.section_content?.acf_flx_hp_cts_section_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.section_content?.acf_flx_hp_cts_section_sub_title }}></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="client-testimonials">
                        <Carousel interval={7000000}>
                          {sectiondata?.section_listing?.map(item => (
                            <Carousel.Item>
                              <div className="testimonial-content">
                                <p className="review-paragraph">{item?.acf_flx_hp_cts_listing_content}</p>
                                <div className="testimonial-user-info-block">
                                  <div className="testimonial-user-img">
                                    <img src={testimonialUser} />
                                  </div>
                                  <div className="testimonial-user-info">
                                    <h4 className="review-heading">{item?.acf_flx_hp_cts_listing_title}</h4>
                                    <h6 className="review-sub-heading">{item?.acf_flx_hp_cts_listing_sub_title}</h6>
                                  </div>
                                </div>
                              </div>
                            </Carousel.Item>
                          ))}                          
                        </Carousel> 
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      default:
        return null;
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  if (loading) return <div></div>
  if (error) return <div>Error: {error}</div>;


  return (
    <>
      <Header />        
      <div className="mainSection">
        {contentSection?.length > 0 ? (
          contentSection?.map((section, index) => (
            <div key={index}>{renderSection(section)}</div>
          ))
        ) : (
          <p>No sections available</p>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Home
