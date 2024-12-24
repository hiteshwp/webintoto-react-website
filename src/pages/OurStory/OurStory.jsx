import React, { useState, useEffect } from 'react';
import './../OurStory/OurStory.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import symbol1 from '../../assets/images/symbol-white.svg'
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
        page_name: 'our-story',
      };
      const result = await axios.post(`${API_BASE_URL}/our-story`, data);
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
        return <section className="position-relative section-block inner-title-section ourstory-inner-title-section">
                <div className="section-shape1"></div>
                <div className="container z-1 position-relative">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label text-white">{sectiondata?.acf_flx_os_tbs_section_title}</h6>
                        <h2 className="main-title text-white text-capitalize" dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_os_tbs_section_content }}></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'about_us_section':
        return <section className="position-relative section-block inner-about-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="inner-about-img-block">
                        <img src={sectiondata?.acf_flx_os_aus_section_image?.image_url} alt={sectiondata?.acf_flx_os_aus_section_image?.image_alt} />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="inner-about-info">
                        <h2>{sectiondata?.acf_flx_os_aus_section_title}</h2>
                        <h6>{sectiondata?.acf_flx_os_aus_section_sub_title}</h6>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="inner-about-info">
                        <p>{sectiondata?.acf_flx_os_aus_section_content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>;
      case 'what_we_do_section':
        return <section className="position-relative section-block inner-about-section">
                  <div className="container">
                    <div className="row home-about-wrap flex-md-row-reverse flex-lg-row-reverse">
                      <div className="col-12 col-md-12 col-lg-6">
                        <div className="home-about-content-block">
                          <h6>{sectiondata?.acf_flx_os_wwds_section_title}</h6>
                          <h3 dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_os_wwds_section_sub_title }}></h3>
                          <p>{sectiondata?.acf_flx_os_wwds_section_content}</p>
                          <div className="list-icons">
                            {sectiondata?.acf_flx_os_wwds_content_listing?.map((item) => (
                              <div className="item-icon" key={item.uid}>
                                <span className="icon-left"><i className="ri-tent-line"></i></span>
                                <h4 className="text-heading-4">{item.acf_flx_os_wwds_listing_title}</h4>
                                <p className="text-body-excerpt color-gray-600 mt-15">{item.acf_flx_os_wwds_listing_content}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6">
                        <div className="home-about-img-block">
                          <img src={sectiondata?.acf_flx_os_wwds_section_image?.image_url} alt={sectiondata?.acf_flx_os_wwds_section_image?.image_alt} className="home-about-img" />
                          <img src={symbol1} alt="Symbol" className="home-about-logo-symbol" />
                        </div>
                      </div>
                    </div>
                  </div>
              </section>;
      case 'status_section':
        return  <section className="position-relative section-block inner-about-section">
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="counter-wrapper mt-3">
                        {sectiondata?.acf_flx_os_ss_section_listing?.map((item) => (
                            <div className="counter-item" key={item.uid}>
                              <h2 className="counter-number">{item.acf_flx_os_ss_listing_detail}</h2>
                              <p>{item.acf_flx_os_ss_listing_title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>;
      case 'client_logo_section':
        return <section className="position-relative section-block inner-about-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="client-logo-wrapper">
                          {sectiondata?.acf_flx_os_cls_client_logo?.map((item) => (
                            <div className="client-logo-item" key={item.uid}>
                              <img src={item.image_url} alt={item.image_alt} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
              </section>;
      case 'our_team_section':
        return <section className="position-relative section-block home-about-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.acf_flx_os_ots_section_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_os_ots_section_sub_title }}></h2>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {sectiondata?.acf_flx_os_ots_section_listing?.map((item) => (
                      <div className="col-12 col-md-3 col-lg-3" key={item.uid}>
                        <div className="our-team-card">
                          <div className="our-team-img">
                            <img src={item.acf_flx_os_ots_listing_image.image_url} alt={item.acf_flx_os_ots_listing_image.image_alt} />
                          </div>
                          <div className="our-team-info">
                            <span className="designation-text">{item.acf_flx_os_ots_listing_title}</span>
                            <h4 className="team-name">{item.acf_flx_os_ots_listing_sub_title}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>;
      case 'life_at_webintoto_section':
        return <section className="position-relative section-block life-at-webintoto-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h6 className="title-label">{sectiondata?.acf_flx_os_laws_section_title}</h6>
                        <h2 className="main-title" dangerouslySetInnerHTML={{ __html: sectiondata?.acf_flx_os_laws_section_sub_title }}></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="image-gallery">
                        {sectiondata?.acf_flx_os_laws_section_gallery?.map((item) => (
                          <div className="image-gallary-item" key={item.uid}>
                            <img src={item.image_url} alt={item.image_alt} />
                          </div>
                        ))}
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
