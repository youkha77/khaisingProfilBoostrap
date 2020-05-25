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

  // nav animation

  $(window).scroll(function(){
    if($(this).scrollTop() > 30){
      $('.navbar').addClass('opaque');
    }else{
      $('.navbar').removeClass('opaque');
    }
  })