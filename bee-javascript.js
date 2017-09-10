document.addEventListener("DOMContentLoaded", function(event) {
  var bodyEl = document.body;
  var beeLogo = document.getElementById('bn-logo-enter');
  var beeLogoMain = document.getElementById('bn-logo-main');
  var mainCTA = document.getElementById('bn-main-cta');
  var emailEl = document.getElementById('bn-main-cta-email');
  var ccEl = document.getElementById('bn-main-cta-cc');
  var submitButtonEl = document.getElementById('bn-main-cta-submit');

  submitButtonEl.disabled = true;
  
  // email checker
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // timeout for fade-in body
  setTimeout(function() {
    bodyEl.style.opacity = 1;
  });
  
  // timeout for big logo fade out
  setTimeout(function() {
    beeLogo.style.opacity = 0;
  }, 1000);

  // timeout for logo display none
  setTimeout(function() {
    beeLogo.style.display = 'none';
  }, 2000);
  
  //timeout for main logo fade in
  setTimeout(function() {
    beeLogoMain.style.opacity = 1;
  }, 2000);
  
  //timeout for main body fade in
  setTimeout(function() {
    mainCTA.style.opacity = 1;
    mainCTA.style.pointerEvents = 'auto';
  }, 3000);

  //email regex check
  function emailChecker() {
    var emailValue = emailEl.value;

    if (emailRegex.test(emailValue)) {
      ccEl.value = emailValue;
      submitButtonEl.disabled = false;
    } else {
      submitButtonEl.disabled = true;
    }
  }

  //adding event listener to input field
  emailEl.addEventListener('keyup', emailChecker);
});
