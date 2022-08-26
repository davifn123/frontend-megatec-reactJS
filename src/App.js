import React from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { CartProvider } from './contexts/CartContext/CartContext';

function App() {

  return (

    <CartProvider>
      <>
        <Menu />
        <BackToTopButton />
        <Footer />
      </>
    </CartProvider>

  );
}

export default App;
