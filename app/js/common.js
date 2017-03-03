$(function() {

   var container = document.querySelector('#container');
   var msnry = new Masonry( container, {
  // Настройки
  columnWidth: 5,
  itemSelector: '.item'


 });

   $('.sl').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    cssEase: 'ease-in',
    asNavFor: '.sl2',
    initialSlide: 11,
 });

 $('.sl2').slick({
    dots: true,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: '40px',
    asNavFor: '.sl',
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
            dots: false,
          slidesToShow: 3,
          centerMode: false,
        }
      }
    ]
   });

});


