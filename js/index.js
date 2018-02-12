'use strict';

$(function(){
  var initial_position = $(".navbar").offset().top;

  $(window).scroll(function () {


  if ($(this).scrollTop() > initial_position) {


  $('.navbar').addClass("nav_fixed"); 
  } else {


  $('.navbar').removeClass("nav_fixed");
  }
  });
});



$(document).ready(function(){

  $(".nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});