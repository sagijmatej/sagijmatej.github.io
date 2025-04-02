
//Splide 
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '#image-carousel', {
        type  : 'fade',
        rewind: true,
        pagination: false,
      } );
      
      splide.mount();
});