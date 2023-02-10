$(document).ready(function () {

  $("#owl-demo").owlCarousel({
   
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    autoPlayTimeout: 2000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 1
      },
      767: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
    // itemsDesktop : [1199,3],
    // itemsDesktopSmall : [979,3]
  });
});