$(window).scroll(function(){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
  var s = skrollr.init();

    // Slideshow 1
  // $("#slider1").responsiveSlides({
  //   maxwidth: 800,
  //   speed: 800
  // });

})
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        maxwidth: 1800,
        timeout: 2000,          // Integer: Time between slide transitions, in milliseconds
        speed: 1000
      });

    });



 