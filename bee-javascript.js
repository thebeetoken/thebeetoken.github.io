document.addEventListener("DOMContentLoaded", function(event) {
  var bodyEl = document.body;
  var beeLogo = document.getElementById('bn-logo-enter');
  var beeLogoMain = document.getElementById('bn-logo-main');
  var mainCTA = document.getElementById('bn-main-cta');

  // timeout for fade-in body
  setTimeout(function() {
    bodyEl.style.opacity = 1;
  });

  // timeout for big logo fade out
  setTimeout(function() {
    beeLogo.style.opacity = 0;
  }, 1000);

  //timeout for main logo fade in
  setTimeout(function() {
    beeLogoMain.style.opacity = 1;
  }, 2000);

  //timeout for main body fade in
  setTimeout(function() {
    mainCTA.style.opacity = 1;
    mainCTA.style.pointerEvents = 'auto';
  }, 3000);
});
