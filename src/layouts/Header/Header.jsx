import React from 'react';
import './../Header/Header.css';
import webintotoLogo from '../../assets/images/logo-white.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header-section">
      <div className="header-container">
        <div className="brand">
          <Link to="/"><img src={webintotoLogo} className="brandLogo" alt="Webintoto" /></Link>
        </div>
        <div className="headerNavBlock">
          <div className="mainMenuBlock">
            <Navbar className="navbarBlock">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Link>Our Work</Link>
                      <NavDropdown title="Services" id="basic-nav-dropdown">
                        <Link to="/ui-ux-design">UI/UX</Link>
                        <Link to="/website-development">Website Development</Link>
                        <Link to="/mobile-application">Mobile Application</Link>
                        <Link>Software Development</Link>
                        <Link>Blockchain</Link>
                        <Link>AR/VR</Link>
                        <Link>IOT</Link>
                        <Link>Digital marketing</Link>
                        <Link>SEO</Link>
                      </NavDropdown>
                      <NavDropdown title="Company" id="basic-nav-dropdown">
                        <Link to="/our-story">Our Story</Link>
                        <Link>Case study</Link>
                        <Link>Contact Us</Link>
                      </NavDropdown>
                      <Link>Industries</Link>
                      <Link>Technologies</Link>
                      <Link>Career</Link>
                      <Link>Blog</Link>
                    </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="headerActionBlock">
            <a className="btn btn-primary">Get A Quote <i className="ri-arrow-right-line ms-2"></i></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
