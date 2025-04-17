
//Splide 
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#image-carousel-front', {
    type: 'fade',
    rewind: true,
    pagination: false,
  });

  splide.mount();
});




//Work page
$('.button-f3').click(function () {
  window.location.href = 'about.html';
});

$(".project-wrapper").hover(
  function () {
    $(this).find(".project-info").show()
  },
  function () {
    $(this).find(".project-info").hide()
  },
);

$(".project-wrapper").hover(
  function () {
    $(this).find(".project-photo-mask").show()
  },
  function () {
    $(this).find(".project-photo-mask").hide()
  },
);