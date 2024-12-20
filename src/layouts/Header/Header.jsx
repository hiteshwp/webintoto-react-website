import React, { useState, useEffect } from 'react';
import './../Header/Header.css';
import webintotoLogo from '../../assets/images/logo-white.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import HeaderPlaceholder from '../Placeholder/HeaderPlaceholder';

import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Header = () => {

  const [loading, setLoading] = useState(false);
  const [headerSection, setHeaderSection] = useState(null);
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    setHeaderSection(true);
    setError(null);

    try {
      const data = {
        section_type: 'header_footer',
      };
      const result = await axios.post(`${API_BASE_URL}/theme-option`, data);
      setHeaderSection(result.data?.sections?.header_section);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const renderMenuItem = (item) => {
    if (item.children && item.children.length > 0) {
      // If the item has children, render a NavDropdown
      return (
        <NavDropdown title={item.title} id={`nav-dropdown-${item.id}`} key={item.id}>
          {item.children.map(child => (
            <Link key={child.id} className="dropdown-item" to={child.url}>
              {child.title}
            </Link>
          ))}
        </NavDropdown>
      );
    } else {
      // If the item has no children, render a regular Nav link
      return (
        <Link key={item.id} className="nav-link" to={item.url}>
          {item.title}
        </Link>
      );
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  if (loading) return <HeaderPlaceholder />
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <header className="header-section">
        <div className="header-container">
          <div className="brand">
            <Link to="/"><img src={headerSection?.header_logo?.logo_url} className="brandLogo" alt={headerSection?.header_logo?.logo_alt} /></Link>
          </div>
          <div className="headerNavBlock">
            <div className="mainMenuBlock">
              <Navbar className="navbarBlock">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        {headerSection?.header_menu?.map(item => renderMenuItem(item))}
                      </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="headerActionBlock">
              <a className="btn btn-primary">Get A Quote 
                <i className="ri-arrow-right-line ms-2"></i>
                <i className="ri-customer-service-2-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
