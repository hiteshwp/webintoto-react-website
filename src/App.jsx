import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import "./Common.css"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path='/about-us' element={<About_us />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact-us' element={<Contact_us />}/> */}
      </Routes>
    </>
  )
}

export default App
