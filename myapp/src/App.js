import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import Section from './components/Section';
import Best from './components/Best';
import About from'./components/AboutUs/About'
import Faqs from './components/Faqs/Faqs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";;
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
      </Routes>
      </Router>
      
      
      
      
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
