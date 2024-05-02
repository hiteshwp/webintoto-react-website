import React from 'react';
import BrowserRouter, { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import About_us from './pages/about_us/About_us';
import Blog from './pages/blog/Blog';
import Contact_us from './pages/contact_us/Contact_us';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about-us' element={<About_us />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/contact-us' element={<Contact_us />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
