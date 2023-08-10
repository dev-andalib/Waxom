


$('.slider-main').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: $('.next'),
      prevArrow: $('.prev')
    });

var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw <= 829){
  $(document).ready(function(){
    $('.content_wrap').slick(
{      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,}
    );
    })
}


else if (vw <= 1284) {
  $(document).ready(function(){
    $('.content_wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      });
    })
  }

else if (vw > 1043) {
  $(document).ready(function(){
    $('.content_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      });
    })
  }




$(function(){
  var containerEl = document.querySelector(".mixit_main");
  var mixer = mixitup(containerEl,{animation:{duration:1000}});
});


$("#counter").countMe(10,5);
$("#counter2").countMe(10,5);
$("#counter3").countMe(10,5);
$("#counter4").countMe(10,5);
$("#counter5").countMe(10,5);




// =================================MENU=======================================

$(".icon").click(function(){
  $(".nav__menu").toggle(300)
})

var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 599) {
$('.nav__menu').hide();
}

$(window).on('load', function() {
vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 599) {
  $('.nav__menu').hide();
}else{
  $('.nav__menu').show();
}
});


$(window).on('resize', function() {
vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 599) {
  $('.nav__menu').hide();
}else{
  $('.nav__menu').show();
}
});