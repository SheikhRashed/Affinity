"use strict";

$(function(){

 //wow jquery plugins
//   new WOW().init();


// Add active class to the current button (highlight it)
var header = document.getElementById("mainSideNav");
var btns = header.getElementsByClassName("nav-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  
  //back to top button
  $(".top-btn").click(function(){
      $("html, body").animate({
          "scrollTop" : "0"
      }, 500);
  });
  
  $(window).scroll(function(){
      var scrollValue = $(this).scrollTop();
      
      //top button fade in fade out
      if(scrollValue >= 300){
          $(".top-btn").fadeIn();
      }else{
        $(".top-btn").fadeOut();
      }

      //header fixed
      if(scrollValue >= 200){
        $(".header").addClass("translate-top");
      }else{
        $(".header").removeClass("translate-top");
      }

      //header fixed
      if(scrollValue >= 300){
        $(".header").addClass("position-fixed");
        $(".dark-logo").addClass("d-block");
        $(".white-logo").addClass("d-none");
      }else{
        $(".header").removeClass("position-fixed");
        $(".dark-logo").removeClass("d-block");
        $(".white-logo").removeClass("d-none");
      }

      //banner space adjust
      if(scrollValue >= 300){
        $(".need_margin").addClass("top-margin");
      }else{
        $(".need_margin").removeClass("top-margin");
      }
  });


//   // Team slider
$('.partner_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   }
      
    ]
  });

});




