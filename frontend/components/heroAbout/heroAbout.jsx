import React from 'react';
// import Countdown from 'react-countdown-now';
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
          housing a reality.
          <br />
          <br />
          Created by engineers from Google and Uber, Bee and by extension 
          the Bee Token strive to put the power back into the hands of the 
          consumers by cutting out the middle man and pushing the savings 
          and benefits back to the homeowners and renters. 
        </p>
        <a href="https://www.thebeetoken.com/whitepaper" target="_blank">
          <button  
            className="bee-about-wp-button">
            white paper
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default HeroAbout;

// <Countdown date={'Sept 19, 2017'} />


