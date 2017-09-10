document.addEventListener("DOMContentLoaded", function(event) {
  var bodyEl = document.body;
  var beeLogo = document.getElementById('bn-logo-enter');
  var beeLogoMain = document.getElementById('bn-logo-main');
  var mainCTA = document.getElementById('bn-main-cta');

  setTimeout(function() {
    bodyEl.style.opacity = 1;
  });

  setTimeout(function() {
    beeLogo.style.opacity = 0;
  }, 1000);

  setTimeout(function() {
    beeLogoMain.style.opacity = 1;
  }, 2000);

  setTimeout(function() {
    mainCTA.style.opacity = 1;
    mainCTA.style.pointerEvents = 'auto';
  }, 3000);
});
