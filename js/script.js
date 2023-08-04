$(document).ready(function(){
    $('.content_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      });
    })

$(function(){
  var containerEl = document.querySelector(".mixit_main");
  var mixer = mixitup(containerEl,{animation:{duration:1000}});
});


