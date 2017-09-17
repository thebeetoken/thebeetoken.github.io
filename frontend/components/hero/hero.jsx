import React from 'react';
require ("./hero.scss");

import HeroCta from '../heroCta/heroCta';
import HeroAbout from '../heroAbout/heroAbout';

const Hero = () => (
  <section className="bee-hero">
    <div className="bee-hero-background-desktop"></div>
    <div className="bee-hero-honeycomb-desktop"></div>
    <div className="bee-hero-margin-block"></div>
    <div className="bee-hero-container">
      <HeroCta />
      <HeroAbout />
    </div>
  </section>
);

export default Hero;



