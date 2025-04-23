
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

$('.slide-text').click(function () {
  window.location.href = 'contact/';
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
  window.location.href = '../contact';
});

$('.button-f3-project').click(function () {
  window.location.href = '../../contact';
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

$(".option-0").click(
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


$('.project-wrapper').click(function () {
  window.location.href = 'fv-01/';
});



/*---select project page*/

var splideProject = new Splide("#main-slider", {
  type:'fade',
  rewind: true,
  pagination: false,
  cover: true,
  heightRatio: 0.5
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splideProject.go(index);
  });
}

splideProject.on("mounted move", function () {
  var thumbnail = thumbnails[splideProject.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splideProject.mount();