document.addEventListener("DOMContentLoaded", function(event) {
  var beeLogo = document.getElementById('bn-logo-enter');
  var beeLogoMain = document.getElementById('bn-logo-main');
  var mainCTA = document.getElementById('bn-main-cta');

  setTimeout(function() {
    beeLogo.style.opacity = 0;
  }, 2000);

  setTimeout(function() {
    beeLogoMain.style.opacity = 1;
  }, 3000);

  setTimeout(function() {
    mainCTA.style.opacity = 1;
    mainCTA.style.pointerEvents = 'auto';
  }, 4000);
});
