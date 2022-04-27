import React from 'react';
import FirstCart from './components/carts/FirstCart';
import LandingPage from './components/landing page/LandingPage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <FirstCart />
    </div>
  );
};

export default App;