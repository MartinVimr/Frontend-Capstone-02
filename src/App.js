import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import About from './components/About';


function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Testimonials />
      <About />
      <Footer/>
    </>
  );
}

export default App;
