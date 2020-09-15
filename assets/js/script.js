$(document).ready(function () {
   $('.burger').click(function (e) { 
      e.preventDefault();
      $('.menu_burger').toggleClass("menu_burger-active");
   });
   $('.input_wrapper').click(function (e) { 
      e.preventDefault();
      $('.input_wrapper span').toggleClass('active');
   });
   $('.input_wrapper').focusout(function (e) { 
      e.preventDefault();
      $('.input_wrapper span').toggleClass('active');
   });
});