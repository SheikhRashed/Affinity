
$(function(){

  $(window).scroll(function(){
    var scrollValue = $(this).scrollTop();
    
    //top button fade in fade out
    // if(scrollValue >= 300){
    //     $(".top-btn").fadeIn();
    // }else{
    //   $(".top-btn").fadeOut();
    // }

    //header fixed
    if(scrollValue >= 200){
      $(".header").addClass("translate-top");
    }else{
      $(".header").removeClass("translate-top");
    }

    //header fixed
    if(scrollValue >= 300){
      $(".header").addClass("position-fixed");
      $(".header").addClass("h-w");
      // $(".white-logo").addClass("d-none");
    }else{
      $(".header").removeClass("position-fixed");
      $(".header").removeClass("h-w");
      // $(".white-logo").removeClass("d-none");
    }

    //banner space adjust
    // if(scrollValue >= 300){
    //   $(".need_margin").addClass("top-margin");
    // }else{
    //   $(".need_margin").removeClass("top-margin");
    // }
});



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
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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


$('.concept_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },

  // //   {
  // //     breakpoint: 576,
  // //     settings: {
  // //       slidesToShow: 1,
  // //       slidesToScroll: 1,
  // //     }
  // //   }
    
  // ]
});
$('.featured_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },

  // //   {
  // //     breakpoint: 576,
  // //     settings: {
  // //       slidesToShow: 1,
  // //       slidesToScroll: 1,
  // //     }
  // //   }
    
  // ]
});


$('.footer_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },

  // //   {
  // //     breakpoint: 576,
  // //     settings: {
  // //       slidesToShow: 1,
  // //       slidesToScroll: 1,
  // //     }
  // //   }
    
  // ]
});



 });


















