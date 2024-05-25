import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Ourstory from './pages/OurStory/OurStory';
import Uiuxdesign from './pages/UiUxDesign/UiUxDesign';
import "./Common.css"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/our-story' element={<Ourstory />}/>
        <Route path='/ui-ux-design' element={<Uiuxdesign />}/>
      </Routes>
    </>
  )
}

export default App
