$(document).ready(function() {
  $('.main-header__burger').click(function(event) {
    $('.main-header__burger-box,.main-header__burger,.main-header__burger-menu').toggleClass('active');
    $('.page-body').toggleClass('lock');
  });
});
