import React from 'react';
require ("./footer.scss");

const Footer = () => (
  <footer className="bee-footer">
    <div className="bee-footer-container">
      <h1>Reach us anywhere!</h1>
      <div className="bee-footer-links">
        <a href="https://medium.com/@thebeetoken" target="_blank" className="bee-footer-link-container">
          <img className="bee-footer-link-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505630235/medium-white_d9qfwd.svg" />
        </a>
        <a href="https://twitter.com/thebeetoken" target="_blank" className="bee-footer-link-container">
          <img className="bee-footer-link-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505630224/twitter_p4jc1d.svg" />
        </a>
        <a href="https://thebeetoken.slack.com/join/shared_invite/MjM4MDY2NDQ3NDc2LTE1MDQ4NDA2ODMtN2Q5Yzc3Y2JhNg" target="_blank" className="bee-footer-link-container">
          <img className="bee-footer-link-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505630227/slack_dndwll.svg" />
        </a>
        <a href="https://t.me/thebeetalk" target="_blank" className="bee-footer-link-container">
          <img className="bee-footer-link-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505630231/telegram-white_deo96l.svg" />
        </a>
        <a href="https://www.facebook.com/thebeetoken" target="_blank" className="bee-footer-link-container">
          <img className="bee-footer-link-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505630219/facebook_lrvtmp.svg" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;




