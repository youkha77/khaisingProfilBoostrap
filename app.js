// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  //carousel de texte

  $('.carousel').carousel({
    interval: 2500,
    pause: 'null'
  })