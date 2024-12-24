import React, { useState, useEffect } from 'react';
import './../CaseStudies/CaseStudies.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Link } from 'react-router-dom';

import ourWorkImg from '../../assets/images/our-work/ourwork-thumb-img1.webp'
import ourProcess from '../../assets/images/process-steps-img.svg';

import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Services = () => {

  const [loading, setLoading] = useState(false);
  const [contentSection, setContentSection] = useState(null);
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    setContentSection(true);
    setError(null);

    try {
      const data = {
        page_name: 'case-studies',
      };
      const result = await axios.post(`${API_BASE_URL}/case-studies`, data);
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
      case 'top_banner_section':
        return <section className="position-relative section-block inner-title-section">
                <div className="section-shape1"></div>
                <div className="container z-1 position-relative">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="title-block mb-0 text-left">
                        <h2 className="main-title text-white text-capitalize">{sectiondata?.acf_flx_stl_tbs_section_title}</h2>
                        <h6 className="main-sub-title text-white">{sectiondata?.acf_flx_stl_tbs_section_content}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'case_study_listing_section':
        return <section className="position-relative section-block bg-gray-pattern1 case-studies-list-section">
                {sectiondata?.case_study_listing?.map((item) => (
                  <div className="case-studies-card" key={item?.uid}>
                    <Link to={`/${item?.listing_slug}`} className="text-decoration-none">
                      <div className="case-studies-img-block">
                        <img src={item?.listing_image} alt={item?.listing_title} />
                        <div className="service-tag-list">
                          <span className="service-tag">{item?.listing_category}</span>
                        </div>
                      </div>
                      <div className="case-studies-info">
                        <h3>{item?.listing_title}</h3>
                        <span className="view-case-study">{item?.link_text} <i className="ri-arrow-right-line ms-2"></i></span>
                      </div>
                    </Link>
                  </div>
                ))}
              </section>;
      case 'cta_section':
        return <section className="position-relative section-block bg-gray-pattern1 case-studies-list-section">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="cta-card-block mt-0 mb-4 max-width-none">
                          <h4>{sectiondata?.acf_flx_stl_ctas_section_title}</h4>
                          <p>{sectiondata?.acf_flx_stl_ctas_section_content}</p>
                          <Link to={sectiondata?.acf_flx_stl_ctas_section_button_url} className="btn btn-primary">{sectiondata?.acf_flx_stl_ctas_section_button_title} <i className="ri-arrow-right-line ms-2"></i></Link>
                        </div>
                    </div>
                  </div>
              </section>;
      case 'pur_process_section':
        return <section className="position-relative section-block service-section3 bg-pink symbol-white2">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.acf_flx_stl_ops_section_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_stl_ops_section_sub_title }}></h2>
                        <p>{sectiondata?.acf_flx_stl_ops_section_content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="our-process-block">
                        <img src={sectiondata?.acf_flx_stl_ops_section_image.image_url} alt={sectiondata?.acf_flx_stl_ops_section_image.image_alt} />
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
      <Footer/>
    </>
  )
}

export default Services
