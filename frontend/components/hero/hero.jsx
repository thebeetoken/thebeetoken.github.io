import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
require ("./hero.scss");

import HeroCta from '../heroCta/heroCta';
import HeroAbout from '../heroAbout/heroAbout';

const Hero = () => (
  <ScrollableAnchor id={'about'}>
  <section className="bee-hero">
    <div className="bee-hero-background-desktop"></div>
    <div className="bee-hero-honeycomb-desktop"></div>
    <div className="bee-hero-margin-block"></div>
    <div className="bee-hero-container-desktop">
      <HeroCta />
      <HeroAbout />
    </div>
    <div className="bee-hero-container-mobile">
      <div className="bee-hero-background-mobile"></div>
      <HeroCta />
      <div className="bee-hero-space-mobile-container"></div>
      <HeroAbout />
    </div>
  </section>
  </ScrollableAnchor>
);

export default Hero;



