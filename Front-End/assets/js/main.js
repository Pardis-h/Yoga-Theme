"use strict";
$.noConflict();
jQuery(document).ready(function(){
    //Menu Burger
    jQuery('.custom-burger').click(function(){
      jQuery('.icon-bar').toggleClass(' open');
      jQuery('.collapse').toggleClass(' show');
    });

});