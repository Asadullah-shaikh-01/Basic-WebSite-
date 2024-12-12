import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Service from './pages/Services/Service';
import Layout from './components/Layout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PNF/PageNotFound';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
function App() {


  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Service />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="abouts" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
