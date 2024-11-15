import React from 'react'
import './../Footer/Footer.css';
import webintotoLogo from '../../assets/images/logo-white.png'
import worldMap from '../../assets/images/world-map.svg'

const Footer = () => {
  return (
    <>
      {/* Our global presence section start */}
      <section className="position-relative section-block global-presence-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h6 className="title-label">Locations</h6>
                <h2 className="main-title">Our Global <span className="color-purple-lite">presence</span> in 5 Countries</h2>
                <p className="title-description">With a global network established, we have our offices covering 5 countries India, Germany, UK, Canada, & USA! With a global impact, we have always created best user experiences with technology.</p>
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
                <img src={worldMap} alt="World Map" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="footer-cta-block">
                <h4 className="text-dark">15 years of building digital products and we are just getting started!</h4>
                <a href="#" className="btn btn-secondary">Start A Project <i className="ri-arrow-right-line ms-2"></i></a>
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
                    <img src={webintotoLogo} alt="Webintoto" />
                  </a>
                  <p>One-stop solution for the online presence of your brand.</p>
                  <div className="footer-contact-info">
                    <h5>Contact Info</h5>
                    <ul className="contact-info-list">
                      <li className="contact-info-item">
                        <a href="tel:+919825409350"><i className="ri-phone-line"></i> +91 98254 09350</a>
                      </li>
                      <li className="contact-info-item">
                        <a href="mailto:contact@webintoto.com"><i className="ri-mail-line"></i> contact@webintoto.com</a>
                      </li>
                      <li className="contact-info-item">
                        <a href="https://web.whatsapp.com/send?phone=9825409350&text="><i className="ri-whatsapp-line"></i> Whatsapp</a>
                      </li>
                      <li className="contact-info-item footer-social">
                        <a href="https://www.facebook.com/webintoto" target="_blank" title="Facebook"><i className="ri-facebook-line"></i></a>
                        <a href="https://www.instagram.com/webintoto" target="_blank" title="Instagram"><i className="ri-instagram-line"></i></a>
                        <a href="https://www.linkedin.com/company/webintoto" target="_blank" title="Linkedin"><i className="ri-linkedin-line"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">Webintoto</h5>
                  <ul className="footer-link-list">
                    <li>
                      <a href="#"><i className="ri-separator"></i> Our Story</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Our Work</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Our Story</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Technology</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Career</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">Our Services</h5>
                  <ul className="footer-link-list">
                    <li>
                      <a href="#"><i className="ri-separator"></i> UI/UX</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Website Development</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Mobile Application</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Software Development</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Blockchain</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> AR/VR</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> IOT</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> SEO</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-link">
                  <h5 className="footer-main-title">Industries</h5>
                  <ul className="footer-link-list">
                    <li>
                      <a href="#"><i className="ri-separator"></i> Ecommerce</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> NGO</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> User Management</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Entertainment Industries</a>
                    </li>
                    <li>
                      <a href="#"><i className="ri-separator"></i> Medical Industries</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="copyright-block">
                  <p>© Webintoto 2024. All Rights Reserved. Privacy Policy</p>
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
