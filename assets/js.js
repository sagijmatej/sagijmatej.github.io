
//Splide 
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '#image-carousel-front', {
        type  : 'fade',
        rewind: true,
        pagination: false,
      } );
      
      splide.mount();
});
