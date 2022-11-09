import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Drawer from './components/Drawer';
import CoverPhoto from './components/CoverPhoto';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import About from "./components/About";
import TC from "./components/TC";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      {location.pathname === '/' && <CoverPhoto />}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/treatments_prices' element={<Treatments />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/TC' element={<TC />} />
      </Routes>
      <Drawer />
      <Footer />
    </div>
  );
}

export default App;
