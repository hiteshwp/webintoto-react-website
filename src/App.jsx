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
      </Routes>
    </>
  )
}

export default App
