/* Custom js for SAT Website */

$(document).ready(function(){

  // Responsive - Edits menu and display based on small screen size detection
  $(window).on("load resize", (function() {
    if ($(window).width() <= 768) {
      $("span.fa").removeClass("fa-close").addClass("fa-bars");
    } else {
      if ($(".primary-menu").hasClass("show-mobile")) {
          $(".primary-menu").removeClass("show-mobile");
          $(".primary-menu > li").addClass("pure-u-md-1-7");
      }
    }
  }));

   // Open and close menu
   $(".mobile-nav-trigger").on("click", function(){
     $(".primary-menu").toggleClass("show-mobile");
     $(".primary-menu > li").toggleClass("pure-u-md-1-7");
     $('span.fa',this).toggleClass("fa-bars").toggleClass("fa-close");
   });


   // Shows the user which menus are currently open 
   $(".primary-menu ul").hover(function(){
       $(this).parent().css("background-color", "#faf8cc");
     }, function(){
       $(this).parent().css("background-color", "transparent");
   });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Text resize functionality (Different from browser window resize and window zoom)
    fontSize = parseInt($("html").css("font-size"));

    // Decrease by a pixel
    $("#scale-decrease").click(function () {
      // console.log("decrease");
      fontSize = fontSize - 1;
      $("html").css({'font-size' : fontSize});
    });

    // Increase by a pixel
    $("#scale-increase").click(function () {
      // console.log("increase");
      fontSize = fontSize + 1;
      $("html").css({'font-size' : fontSize});
    });

    // Set font to normal size for all elements i.e. Reset to 100%
    $("#scale-normalise").click(function () {
      // console.log("normalise");
      fontSize = 16;
      $("html").css({'font-size' : fontSize});
    });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        // 'Print Page' functionality
        $("#print-page").click(function() {
          window.print();
        });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    //  Hero image carousel settings
     $('.hero-carousel').lightSlider({
        slideMove: 1,
        item: 1,
        loop: true,
        speed: 6000,
        mode: 'fade',
        pause: 6000,
        controls: false,
        enableDrag: false,
        auto: true,
        pager: false,
        slideMargin: 0,
        // onAfterSlide: function (el) {
        //     $('#current').text();
        // }
      });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Scrolls to top of page when 'Back to Top' link is clicked
    $(".back-to-top a").click(function() {
     $('html,body').animate({
         scrollTop: $("header").offset().top},
         2000, 'easeInOutQuint'
     );
    });

 });
