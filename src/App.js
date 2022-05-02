import React from 'react';
import Articles from './components/articles/Articles';
import FirstCart from './components/carts/FirstCart';
import FivthCart from './components/carts/FivthCart';
import ForthCart from './components/carts/ForthCart';
import SecondCart from './components/carts/SecondCart';
import ThirdCart from './components/carts/ThirdCart';
import Footer from './components/footer/Footer';
import LandingPage from './components/landing page/LandingPage';
import Navbar from './components/navbar/Navbar';
import Report from './components/report/Report';
import StartingBox from './components/starting box/StartingBox';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <FirstCart />
      <SecondCart />
      <ThirdCart />
      <ForthCart />
      <FivthCart />
      <Articles />
      <StartingBox />
      <Report />
      <Footer />
    </div>
  );
};

export default App;