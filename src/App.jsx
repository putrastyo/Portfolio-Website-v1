import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar';
import About from './pages/About';
import MyWorks from './pages/MyWorks';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <div className="h-dvh">
        <Router>
          <Navbar/>
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<About/>} />
              <Route path="/my-works" element={<MyWorks/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App