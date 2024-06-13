import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Ourstory from './pages/OurStory/OurStory';
import Uiuxdesign from './pages/UiUxDesign/UiUxDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import MobileApplication from './pages/MobileApplication/MobileApplication';
import "./Common.css"

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
      </Routes>
    </>
  )
}

export default App
