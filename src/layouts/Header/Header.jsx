import React from 'react';
import './../Header/Header.css';
import webintotoLogo from '../../assets/images/logo-white.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  return (
    <header className="header-section">
      <div className="header-container">
        <div className="brand">
          <a href="#"><img src={webintotoLogo} className="brandLogo" alt="Webintoto" /></a>
        </div>
        <div className="headerNavBlock">
          <div className="mainMenuBlock">
            <Navbar className="navbarBlock">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#">Our Work</Nav.Link>
                      <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">UI/UX</NavDropdown.Item>
                        <NavDropdown.Item href="#">Website Development</NavDropdown.Item>
                        <NavDropdown.Item href="#">Mobile Application</NavDropdown.Item>
                        <NavDropdown.Item href="#">Software Development</NavDropdown.Item>
                        <NavDropdown.Item href="#">Blockchain</NavDropdown.Item>
                        <NavDropdown.Item href="#">AR/VR</NavDropdown.Item>
                        <NavDropdown.Item href="#">IOT</NavDropdown.Item>
                        <NavDropdown.Item href="#">Digital marketing</NavDropdown.Item>
                        <NavDropdown.Item href="#">SEO</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Company" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
                        <NavDropdown.Item href="#">Case study</NavDropdown.Item>
                        <NavDropdown.Item href="#">Contact us</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#">Industries</Nav.Link>
                      <Nav.Link href="#">Technologies</Nav.Link>
                      <Nav.Link href="#">Career</Nav.Link>
                      <Nav.Link href="#">Blog</Nav.Link>
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
