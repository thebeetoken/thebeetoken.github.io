import React from 'react';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import EmailForm from './email-form/email-form';
//import Team from './team/team';
//import ValueProp from './valueprop/valueprop';


const App = () => (
  <div className="bee-main">
    <NavBar/>
    <Splash/>
    <EmailForm/>
  </div>
)

export default App;

