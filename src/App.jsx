import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';

import { Header } from './containers/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './containers/Footer';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';

export const App = () => (
  <HashRouter>
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <div className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
      </div>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  </HashRouter>
);
