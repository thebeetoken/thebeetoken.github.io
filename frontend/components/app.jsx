import React from 'react';
import Header from './header/header';
import Hero from './hero/hero';
import ValueProp from './valueProp/valueProp';
import Subscribe from './subscribe/subscribe';
import EmailForm from './email-form/email-form';
import Team from './team/team';
import Footer from './footer/footer';
//import Team from './team/team';
//import ValueProp from './valueprop/valueprop';


const App = () => (
  <div className="bee-main">
    <Header/>
    <Hero />
    <ValueProp />
    <Team />
    <Subscribe />
    <Footer />
  </div>
)

export default App;

