import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import Footer from './component/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
