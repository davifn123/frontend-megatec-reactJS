import React from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (

    <div>
      <Menu />
      <BackToTopButton />
      <Footer />
    </div>

  );
}

export default App;
