import React from 'react';
import './main.scss';

import { Header } from './containers/Header';
import { Hero } from './containers/Hero';
import { WhyUs } from './containers/WhyUs/WhyUs';
import { Services } from './containers/Services/Services';

export const App = () => (
  <div className="app">
    <Header />
  
    <Hero />

    <WhyUs />

    <Services />
  </div>
);
