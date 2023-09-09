import React from 'react';
import './main.scss';

import { Header } from './containers/Header';
import { Hero } from './containers/Hero';
import { WhyUs } from './containers/WhyUs';
import { Services } from './containers/Services';
import { Сontacts } from './containers/Сontacts';

export const App = () => (
  <div className="app">
    <Header />
  
    <Hero />

    <WhyUs />

    <Services />

    <Сontacts />
  </div>
);
