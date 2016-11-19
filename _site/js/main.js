/**
 *
 *  Main JavaScript
 *
 *  @package gleesik_scripts
 *
 **/

 // IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  // The $ is now locally scoped

 // Listen for the jQuery ready event on the document
 $(function() {

   // The DOM is ready!

   // Your Code Here :)

   // Smooth Scrolling Links
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });

 });

 // The rest of the code goes here!

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
