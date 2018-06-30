import React from 'react';
import Header from './Header';
import MostPopular from './MostPopular';
import CityCards from './CityCards';
import Special from './Special';
import HowBuy from './HowBuy';
import Footer from './Footer';
import BestPrice from './BestPrice';
import Download from './Download';
import Subscribe from './Subscribe';
import AviaAgencies from './AviaAgencies';

const HomePage = () => {
  return (
    <div>
      <Header />
      <MostPopular />
      <CityCards />
      <BestPrice />
      <AviaAgencies />
      <Subscribe />
      <Special />
      <HowBuy />
      <Download />
      <Footer />
    </div>
  );
};

export default HomePage;
