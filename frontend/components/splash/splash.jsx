import React from 'react';
import SocialMedia from '../social-media/social-media';
require ("./splash.scss");

const Splash = () => (
  <div className="bee-splash-container">
    <div className="bee-splash-overview-container">
      <h1>DECENTRALIZED HOUSING</h1>
      <div className="bee-splash-overview-links-container">
        <a>White Paper</a>
        <a>Powerpoint</a>
      </div>
    </div>
    <SocialMedia/>
  </div>
);

export default Splash;
