import React from 'react';
require ("./heroCta.scss");

const HeroCta = () => (
  <div className="bee-hero-cta">
    <div className="bee-hero-cta-container">
      <div className="bee-hero-cta-logo-container">
        <img className="bee-hero-cta-logo" src="http://res.cloudinary.com/duettwoxj/image/upload/v1505626872/logo-vertical_d1iixl.svg" />
      </div>
      <div className="bee-hero-cta-content">
        <h1>Reinventing Housing Exchange</h1>
        <p>Putting housing back into the hands of the consumer through the power of Ethereum.</p>
      </div>
      <button className="bee-hero-cta-button">
        Read our whitepaper
      </button>
    </div>
  </div>
);

export default HeroCta;


