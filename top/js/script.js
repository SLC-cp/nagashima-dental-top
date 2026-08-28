
// スライダー
$(function () {
  $('.sec09-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });
});


// ハンバーガーメニュー

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {

  menu.classList.toggle('open');
  menuBtn.classList.toggle('open');

});




