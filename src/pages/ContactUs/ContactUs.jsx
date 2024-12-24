import React, { useState, useEffect } from 'react';
import './../ContactUs/ContactUs.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
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
        page_name: 'contact-us',
      };
      const result = await axios.post(`${API_BASE_URL}/contact-us`, data);
      setContentSection(result?.data?.sections?.page_content_section || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <>
      {/* Header section start */}
      <Header />
      {/* Header section end */}
      
      <div className="mainSection">
        {/* Top title section start */}
        <section className="position-relative section-block inner-title-section bg-ghost-white">
          <div className="section-shape1"></div>
          <div className="container z-1 position-relative">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title-2">{contentSection?.section_title}</h2>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__text">
                  <p>{contentSection?.section_content}</p>
                </div>
              </div>
            </div>

            <div className="row contact__btm">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="contact__info">
                  <h3 className="sub-title-anim-top animation__word_come" dangerouslySetInnerHTML={{ __html: contentSection?.address_section_content_title }}></h3>
                  <ul>
                    <li><a href={`tel:${contentSection?.address_section_contact_number_without_space}`}>{contentSection?.address_section_contact_number}</a></li>
                    <li><a href={`mailto:${contentSection?.address_section_email_address}`}>{contentSection?.address_section_email_address}</a></li>
                    <li><span dangerouslySetInnerHTML={{ __html: contentSection?.address_section_address_detail }}></span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="contact__form">
                  <form action="" method="">
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="name" placeholder="Name *" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="email" name="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="tel" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="subject" placeholder="Subject *" />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <textarea name="message" placeholder="Messages *"></textarea>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="btn_wrapper">
                          <button className="btn btn-primary"> Send Messages <i className="ri-arrow-right-line ms-2"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top title section end */}

        
      </div>

      {/* Footer section start */}
      <Footer/>
      {/* Footer section end */}
    </>
  )
}

export default Services
