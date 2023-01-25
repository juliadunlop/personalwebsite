import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return <Router>
    <Header />
    <Routes>
    <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
}

export default App;