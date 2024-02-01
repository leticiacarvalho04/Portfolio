import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';
import Footer from './component/footer/footer';
import Header from './component/navbar/navbar';

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
