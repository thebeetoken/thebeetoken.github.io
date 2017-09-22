import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
require ("./subscribe.scss");

import EmailForm from '../email-form/email-form.jsx';
const Subscribe = () => (
  <section className="bee-subscribe">
    <ScrollableAnchor id={'subscribe'}>
    <div className="subscribe-block"></div>
    </ScrollableAnchor>
    <div className="bee-subscribe-honeycomb-desktop"></div>
    <div className="bee-subscribe-container">
      <h1>Provide us your email to receive the latest news!</h1>
      <EmailForm />
    </div>
  </section>
);

export default Subscribe;



