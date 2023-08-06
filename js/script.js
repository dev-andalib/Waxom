$(document).ready(function(){
    $('.content_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      });
    })


$('.slider-main').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: $('.next'),
      prevArrow: $('.prev')
    });


$(function(){
  var containerEl = document.querySelector(".mixit_main");
  var mixer = mixitup(containerEl,{animation:{duration:1000}});
});


$("#counter").countMe(10,5);
$("#counter2").countMe(10,5);
$("#counter3").countMe(10,5);
$("#counter4").countMe(10,5);
$("#counter5").countMe(10,5);

