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
      <form onSubmit={() => this.handleSubmit}>
        <input type="text"
               ref={email_address => emailAddress = email_address}
               placeholder="Email Address"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default EmailForm;

