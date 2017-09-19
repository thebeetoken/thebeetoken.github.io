import React from 'react';
import Countdown from 'react-countdown-now';
require ("./heroAbout.scss");

const HeroAbout = () => (
  <div className="bee-hero-about">
    <div className="bee-hero-about-container">
      <div className="bee-hero-about-content">
        <h1>About Bee</h1>
        <p>
          Finding housing has become a nightmare riddled with scams, 
          fees, and hidden costs. With the Bee Token, we are creating 
          a safe housing exchange platform powered by Ethereum and our 
          own side chain to make affordable, decentralized short-term 
          housing a reality
        </p>
        <Countdown date={'Sept 19, 2017'} />
      </div>
    </div>
  </div>
);

export default HeroAbout;


