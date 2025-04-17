
//Splide 
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#image-carousel-front', {
    type: 'fade',
    rewind: true,
    pagination: false,
    autoplay: true,
    interval: 9000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  splide.mount();
});

//If mobile
/*
document.addEventListener('DOMContentLoaded', function () {
  if ($(window).width() > 768) {
    $(this).find(".option-0").css("display", "none");
   }
});
*/


//Work page
$('.button-f3').click(function () {
  window.location.href = 'about.html';
});

$(".project-wrapper").hover(
  function () {
    $(this).find(".project-info").show()
  },
  function () {
    if ($(window).width() > 768) {
    $(this).find(".project-info").hide();
   }
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

/*
$(".option-1").click(
  function () {
    $("project-wrapper").not(".filter-option-1")
      .css("display", "none");
  }
);
*/

$(".button-all").click(
  function () {
    $(".project-wrapper").css("display", "block");
  }
);

$(".option-1").click(
  function () {
    $(".filter-option-1")
      .css("display", "block");
    $(".project-wrapper").not(".filter-option-1")
      .css("display", "none");
  }
);

$(".option-2").click(
  function () {
    $(".filter-option-2")
      .css("display", "block");
    $(".project-wrapper").not(".filter-option-2")
      .css("display", "none");
  }
);

$(".option-3").click(
  function () {
    $(".filter-option-3")
      .css("display", "block");
    $(".project-wrapper").not(".filter-option-3")
      .css("display", "none");
  }
);

$(".option-4").click(
  function () {
    $(".filter-option-4")
      .css("display", "block");
    $(".project-wrapper").not(".filter-option-4")
      .css("display", "none");
  }
);

