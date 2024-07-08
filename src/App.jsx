import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Common.css"

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Ourstory from './pages/OurStory/OurStory';
import Uiuxdesign from './pages/UiUxDesign/UiUxDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import MobileApplication from './pages/MobileApplication/MobileApplication';
import SoftwareDevelopment from './pages/SoftwareDevelopment/SoftwareDevelopment';
import Blockchain from './pages/Blockchain/Blockchain';
import ArVr from './pages/ArVr/ArVr';
import Iot from './pages/Iot/Iot';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import Seo from './pages/Seo/Seo';
import OurWork from './pages/OurWork/OurWork';
import OurWorkDetails from './pages/OurWorkDetails/OurWorkDetails';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import CaseStudiesDetails from './pages/CaseStudiesDetails/CaseStudiesDetails';
import ContactUs from './pages/ContactUs/ContactUs';
import Industries from './pages/Industries/Industries';
import Technologies from './pages/Technologies/Technologies';
import TechnologiesDetails from './pages/TechnologiesDetails/TechnologiesDetails';
import Career from './pages/Career/Career';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/our-story' element={<Ourstory />}/>
        <Route path='/ui-ux-design' element={<Uiuxdesign />}/>
        <Route path='/website-development' element={<WebsiteDevelopment />}/>
        <Route path='/mobile-application' element={<MobileApplication />}/>
        <Route path='/software-development' element={<SoftwareDevelopment />}/>
        <Route path='/blockchain' element={<Blockchain />}/>
        <Route path='/arvr' element={<ArVr />}/>
        <Route path='/iot' element={<Iot />}/>
        <Route path='/digital-marketing' element={<DigitalMarketing />}/>
        <Route path='/seo' element={<Seo />}/>
        <Route path='/our-work' element={<OurWork />}/>
        <Route path='/our-work-details' element={<OurWorkDetails />}/>
        <Route path='/case-studies' element={<CaseStudies />}/>
        <Route path='/case-studies-details' element={<CaseStudiesDetails />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/industries' element={<Industries />}/>
        <Route path='/technologies' element={<Technologies />}/>
        <Route path='/technologies-details' element={<TechnologiesDetails />}/>
        <Route path='/career' element={<Career />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog-details' element={<BlogDetails />}/>
      </Routes>
    </>
  )
}

export default App
