import React from 'react';
require('./email-form.scss');

const EmailForm = () => {
  let emailAddress;

  const handleSubmit = e => {
    e.preventDefault();

    $.ajax({
      method: "POST",
      url: "/api/email",
      data: emailAddress,
      success: () => alert("Success!"),
      error: () => alert("Failure!")
    })
  };

  return (
    <div className="bee-email-form-container">
      <form className="bee-main-cta-form" onSubmit={() => this.handleSubmit}>
        <input 
               className="bee-main-cta-email"
               type="text"
               ref={email_address => emailAddress = email_address}
               placeholder="Email Address"/>
        <button className="bee-main-cta-submit" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default EmailForm;

