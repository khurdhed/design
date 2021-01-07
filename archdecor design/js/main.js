    // mean-menu-mobile-menu\\
    $(document).ready(function () {
      $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
      });

    });

    // sticky-menu-header\\
    $(document).ready(function () {
      $('.simple-menu').simpleMenu({
        stickyMenu: true,
        slidingLine: false,
      });
    });

    // owl-carousel\\
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        nav: false,
        mouseDrag: true,
        dots: true,
        autoplay: false,
        autoplaytimeout: 4000,
      });
    });

    // slick-slider\\
    $(document).ready(function () {
      $('.regular-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    });
    // slick-slider-2\\
    $(document).ready(function () {
      $('.slick-slider-2').slick({
        dots: false,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });

    // slick silder-services-pages\\

    $(document).ready(function () {
      $('.slider-slick-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
      })
    })

    // slick slider - page -pages\\
    $(document).ready(function () {
      $('.slider-slick-page').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
      })
    })


    // slick slider - page -pages\\
    $(document).ready(function () {
      $('.fill-wraper').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        loop: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
      })
    })



    // wow.js\\


    wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
    })
    wow.init();

    // mixit up 