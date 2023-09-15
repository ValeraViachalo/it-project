import { AboutUs } from './AboutUs/AboutUs';
import { Hero } from './Hero';
import { WhyUs } from './WhyUs';

export const HomePage = () => (
  <div className="home-page">
    <Hero />
  
    <WhyUs />

    <AboutUs />
  </div>
);