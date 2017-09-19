import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
require ("./team.scss");

import TeamCore from '../teamCore/teamCore.jsx';
import TeamAdvisors from '../teamAdvisors/teamAdvisors.jsx';

const Team = () => (
  <section className="bee-team">
    <div className="bee-team-honeycomb-desktop"></div>
    <div className="bee-team-team-text-container">
      <ScrollableAnchor id={'team'}>
        <div className="bee-scroll-block-team"></div>
      </ScrollableAnchor>
      <h1 className="bee-team-team" >Team</h1>
      <h1 className="bee-team-blurb">Not powered by Honey, but by a talented team of engineers from Google and Uber.</h1>
    </div>
    <TeamCore />
    <div className="bee-team-advisors-text-container">
      <ScrollableAnchor id={'advisors'}>
        <div className="bee-scroll-block"></div>
      </ScrollableAnchor>
      <h1 className="bee-team-advisors-team">Advisors</h1>
      <h1 className="bee-team-advisors-blurb">A special group of individuals providing insight from top tech and financial companies.</h1>
    </div>
    <TeamAdvisors />
  </section>
);

export default Team;