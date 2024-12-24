import React, { useState, useEffect } from 'react';
import './../Footer/Footer.css';
import FooterPlaceholder from '../Placeholder/FooterPlaceholder';
import { Link } from 'react-router-dom';

import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Footer = () => {

  const [loading, setLoading] = useState(false);
  const [footerSection, setFooterSection] = useState(null);
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    setFooterSection(true);
    setError(null);

    try {
      const data = {
        section_type: 'header_footer',
      };
      const result = await axios.post(`${API_BASE_URL}/theme-option`, data);
      setFooterSection(result.data?.sections?.footer_section);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  if (loading) return <FooterPlaceholder />
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Our global presence section start */}
      <section className="position-relative section-block global-presence-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h6 className="title-label">{footerSection?.top_footer_section?.section_title}</h6>
                <h2 className="main-title" dangerouslySetInnerHTML={{ __html: footerSection?.top_footer_section?.section_sub_title }}></h2>
                <p className="title-description">{footerSection?.top_footer_section?.section_content}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="world-map-block">
                {/* <div className="world-map-list">
                  <ul>
                    <li>
                      <span>Germany</span>
                    </li>
                    <li>
                      <span>Canada</span>
                    </li>
                    <li>
                      <span>United Kingdom</span>
                    </li>
                    <li>
                      <span>USA</span>
                    </li>
                  </ul>
                </div> */}
                <img src={footerSection?.top_footer_section?.section_map_image?.map_image?.image_url} alt={footerSection?.top_footer_section?.section_map_image?.map_image?.image_alt} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="footer-cta-block">
                <h4 className="text-dark">{footerSection?.top_footer_section?.section_bottom_title}</h4>
                <a href={footerSection?.top_footer_section?.section_bottom_link_url} className="btn btn-secondary">{footerSection?.top_footer_section?.section_bottom_link_title} <i className="ri-arrow-right-line ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our global presence section end */}

      {/* Footer section start */}
      <footer className="position-relative section-block footer-section">
         <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-info">
                  <a href="#" className="footer-logo">
                    <img src={footerSection?.footer_logo?.logo_url} alt={footerSection?.footer_logo?.logo_alt} />
                  </a>
                  <p>{footerSection?.footer_content}</p>
                  <div className="footer-contact-info">
                    <h5>Contact Info</h5>
                    <ul className="contact-info-list">
                      <li className="contact-info-item">
                        <a href={`tel:${footerSection?.contact_section?.contact_number}`}><i className="ri-phone-line"></i> {footerSection?.contact_section?.contact_number}</a>
                      </li>
                      <li className="contact-info-item">
                        <a href={`mailto:${footerSection?.contact_section?.email_address}`}><i className="ri-mail-line"></i> {footerSection?.contact_section?.email_address}</a>
                      </li>
                      <li className="contact-info-item">
                        <a href={`https://web.whatsapp.com/send?phone=${footerSection?.contact_section?.whatsapp_number}&text=`}><i className="ri-whatsapp-line"></i> Whatsapp</a>
                      </li>
                      <li className="contact-info-item footer-social">
                      {footerSection?.social_icon_section?.facebook_link && <a href={footerSection?.social_icon_section?.facebook_link} target="_blank" title="Facebook"><i className="ri-facebook-line"></i></a> }
                      {footerSection?.social_icon_section?.instagram_link &&  <a href={footerSection?.social_icon_section?.instagram_link} target="_blank" title="Instagram"><i className="ri-instagram-line"></i></a> }
                      {footerSection?.social_icon_section?.linkedin_link && <a href={footerSection?.social_icon_section?.linkedin_link} target="_blank" title="Linkedin"><i className="ri-linkedin-line"></i></a> }
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">{footerSection?.footer_menus?.webintoto_menu?.menu_title}</h5>
                  <ul className="footer-link-list">
                    {footerSection?.footer_menus?.webintoto_menu?.menu?.map((item) => (
                      <li>
                        <Link key={item.id} className="dropdown-item" to={item.url}><i className="ri-separator"></i> {item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">{footerSection?.footer_menus?.our_services_menu?.menu_title}</h5>
                  <ul className="footer-link-list">
                    {footerSection?.footer_menus?.our_services_menu?.menu?.map((item) => (
                      <li>
                        <Link key={item.id} className="dropdown-item" to={item.url}><i className="ri-separator"></i> {item.title}</Link>
                      </li>
                    ))}                    
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">{footerSection?.footer_menus?.industries_menu?.menu_title}</h5>
                  <ul className="footer-link-list">
                    {footerSection?.footer_menus?.industries_menu?.menu?.map((item) => (
                      <li>
                        <Link key={item.id} className="dropdown-item" to={item.url}><i className="ri-separator"></i> {item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="copyright-block">
                  <p>© {footerSection?.footer_copyright}</p>
                </div>
              </div>
            </div>
         </div>
      </footer>
      {/* Footer section end */}
    </>
  )
}

export default Footer
