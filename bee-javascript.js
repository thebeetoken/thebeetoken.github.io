document.addEventListener("DOMContentLoaded", function(event) {
  var bodyEl = document.body;
  var beeLogo = document.getElementById('bee-logo-enter');
  var beeLogoMain = document.getElementById('bee-main-header-logo-container');
  var socialLinks = document.getElementById('bee-main-social-links-container');
  var mainCTA = document.getElementById('bee-main-content-container');
  var emailEl = document.getElementById('bee-main-cta-email');
  var ccEl = document.getElementById('bee-main-cta-cc');
  var submitButtonEl = document.getElementById('bee-main-cta-submit');
  var thankYou = document.getElementById('bee-main-cta-conformation');
  var provide = document.getElementById('bee-main-cta-provide');
  var myStorage = window.localStorage;

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
    socialLinks.style.opacity = 1;
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
      submitButtonEl.disabled = false;
      ccEl.value = emailValue;
    } else {
      submitButtonEl.disabled = true;
    }
  }

  if (myStorage.getItem('bee-registered')) {
    var date = new Date();
    if (parseInt(myStorage.getItem('bee-registered')) < (date.getTime() / 1000)) {
      myStorage.removeItem('bee-registered');
      provide.style.display = 'block';
    } else {
      provide.style.display = 'none';
      thankYou.style.display = 'block';
    }
  }

  function addLocalStorage() {
    var date = new Date();
    var expDate = JSON.stringify((date.getTime() / 1000) + 172800);
    myStorage.setItem('bee-registered', expDate);
  }


  //adding event listener to input field
  emailEl.addEventListener('keyup', emailChecker);
  submitButtonEl.addEventListener('click', addLocalStorage);
});
