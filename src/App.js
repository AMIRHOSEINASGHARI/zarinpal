import React from 'react';
import FirstCart from './components/carts/FirstCart';
import ForthCart from './components/carts/ForthCart';
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
      <ForthCart />
    </div>
  );
};

export default App;