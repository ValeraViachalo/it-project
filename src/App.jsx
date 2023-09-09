import React from 'react';
import './main.scss';

import { Header } from './containers/Header';
import { Hero } from './containers/Hero';

export const App = () => (
  <div className="app">
    <Header />
  
    <Hero />
  </div>
);
