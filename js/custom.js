(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  // SEND ME A MESSAGE
  $('#sendButton').click(function(){

    // Get form data
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    
    // Encode message for URL
    var encodedMessage = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    
    // WhatsApp link with pre-filled message
    var whatsappLink = "https://wa.me/5535992698687?text=" + encodedMessage;
    
    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');

});

})(jQuery);
