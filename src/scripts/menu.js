$(document).ready(function(){
  $('#hamburger').click(function(){
    $(this).toggleClass('open');
    $('html').toggleClass('body-overlay');
    $('body').toggleClass('body-overlay');
    $('.nav-list').toggleClass('nav-open');
    $('.site-nav').toggleClass('nav-open');
    $('.nav-list li a').toggleClass('nav-open');
  });
});