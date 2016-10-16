'use strict';

$(document).ready(function(){
  $('.slider').slider({fullWidth: true});
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
  $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true
    }
  );
   $('.fixed-action-btn').openFAB();  
  $('.fixed-action-btn').closeFAB();
});
