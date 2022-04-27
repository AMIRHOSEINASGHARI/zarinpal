import React from 'react';
import FirstCart from './components/carts/FirstCart';
import SecondCart from './components/carts/SecondCart';
import ThirdCart from './components/carts/ThirdCart';
import LandingPage from './components/landing page/LandingPage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <FirstCart />
      <SecondCart />
      <ThirdCart />
    </div>
  );
};

export default App;