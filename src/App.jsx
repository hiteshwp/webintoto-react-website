import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About_us from './pages/About_us/About_us';
import Blog from './pages/Blog/Blog';
import Contact_us from './pages/Contact_us/Contact_us';
import Services from './pages/Services/Services';
import "./Common.css"

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About_us />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact-us' element={<Contact_us />}/>
        </Routes>
    </>
  )
}

export default App
