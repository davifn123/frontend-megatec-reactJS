import React from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { CartProvider } from './contexts/CartContext/CartContext';
import { AuthProvider } from './contexts/AuthContext/Auth';

function App() {

  return (

    <AuthProvider >
      <CartProvider>
        <>
          <Menu />
          <BackToTopButton />
          <Footer />
        </>
      </CartProvider>
    </AuthProvider>

  );
}

export default App;
