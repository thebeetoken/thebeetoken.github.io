import React, { Component } from 'react';
require('./email-form.scss');

class EmailForm extends Component {
  constructor(){
    super();
    this.state = { 
      emailAddress: "",
      submitStatus: true  
    }
  }

  handleChange(e){
    this.setState({ emailAddress: e.target.value }, () => this.emailChecker())
  }

  emailChecker(){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { emailAddress } = this.state;

    if (emailRegex.test(emailAddress)){
      this.setState({ submitStatus: false });
      $(".bee-main-cta-cc").value = emailAddress;
    } else {
      this.setState({ submitStatus: true });
    }
  }

  handleSubmit(){
    alert("Hello World");
  }

  render(){
    return (
      <div className="bee-email-form-container">
        <form className="bee-main-cta-form" method="POST" action="http://formspree.io/thebeetoken@gmail.com">
          <input className="bee-main-cta-email" id="bee-main-cta-email" type="email" name="email" placeholder="Your Email" autoComplete="off" onChange={(e) => this.handleChange(e)}/>
          <input className="bee-main-cta-cc" id="bee-main-cta-cc" type="hidden" name="_cc" value="" />
          <input className="bee-main-cta-hidden" type="hidden" name="_subject" value="Stay tuned for The Bee Token updates!" />
          <input className="bee-main-cta-hidden" type="hidden" name="_next" value="https://thebeetoken.github.io" />
          <input className="bee-main-cta-hidden" type="hidden" name="_format" value="plain" />
          <button className="bee-main-cta-submit" id="bee-main-cta-submit" type="submit" disabled={this.state.submitStatus}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EmailForm;


        //<form className="bee-main-cta-form" onSubmit={() => this.handleSubmit()}>
          //<input 
                 //className="bee-main-cta-email"
                 //type="text"
                 //onChange={(e) => this.handleChange(e)}
                 //placeholder="Email Address"/>
          //<button 
                 //className="bee-main-cta-submit" 
                 //disabled={this.state.submitStatus}
                 //type="submit" 
                 //value="Submit">Submit
          //</button>
        //</form>
