import React from 'react';
require ("./team.scss");

import TeamCore from '../teamCore/teamCore.jsx';
import TeamAdvisors from '../teamAdvisors/teamAdvisors.jsx';

const Team = () => (
  <section className="bee-team">
    <div className="bee-team-honeycomb-desktop"></div>
    <h1 className="bee-team-team">Team</h1>
    <h1 className="bee-team-blurb">Not powered by Honey, but by a talented team of engineers from Google and Uber.</h1>
    <TeamCore />
    <h1 className="bee-team-advisors-team">Advisors</h1>
    <h1 className="bee-team-advisors-blurb">A special group of individuals providing insight from top tech and financial companies.</h1>
    <TeamAdvisors />
  </section>
);

export default Team;



