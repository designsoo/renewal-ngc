$(function () {
  // ============== ham-button motion =============
  $(".hamBtn").on("click", function () {
    $(".hamBtn__inner").toggleClass("active");
  });

  // ============= ham-button-click --- subMenu =============
  var count = 0;
  $(".hamBtn").on("click", function () {
    count++;
    if (count % 2 != 0) {
      $(".subMenu").stop().animate(
        {
          right: "0px",
        },
        500
      );
    } else {
      $(".subMenu").stop().animate(
        {
          right: "-350px",
        },
        500
      );
    }
  });

  // ============= mainBanner - Fade =============
  var showBanner = 0;

  function autoBanner() {
    $(".banner>li")
      .eq(showBanner)
      .stop()
      .fadeIn(1000)
      .siblings()
      .stop()
      .fadeOut(1000);

    $(".control-item>a>li")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".control-bar-fill").css("width", 0);
    $(".control-bar-fill").stop().animate(
      {
        width: "100%",
      },
      5000
    );

    if (showBanner < 2) {
      showBanner++;
    } else {
      showBanner = 0;
    }
  }

  //   title-click : change banner
  $(".control-item>a>li").click(function () {
    showBanner = $(this).index();
    autoBanner();
  });

  setInterval(autoBanner, 5000);

  // ============= 1. channel-item / channel-picked =============
  $(".channel>li").on("click", function () {
    count = $(this).index();
    $(".channel-picked>li")
      .eq(count)
      .stop()
      .fadeIn(500)
      .siblings()
      .stop()
      .fadeOut(500);
  });

  // ============= 2.magazines - slide =============
  var mgz = 0;

  var mgzLiWidth = $(".magazines>li").outerWidth();
  var mgzLiCount = $(".magazines>li").length; //5ea

  var mgzObj = $(".magazines>li:lt(5)").clone();
  $(".magazines").append(mgzObj);

  var mgzCount = $(".magazines>li").length;
  console.log(mgzCount); //9ea

  $(".magazines").width(mgzCount * mgzLiWidth);
  $(".magazines>li").outerWidth(mgzLiWidth);

  function autoMgz() {
    if (mgz == mgzLiCount) {
      mgz = 0;
      $(".magazines").css("margin-left", 0);
    }
    mgz++;
    $(".magazines")
      .stop()
      .animate(
        {
          marginLeft: -mgz * mgzLiWidth,
        },
        1000
      );
  }

  setInterval(autoMgz, 3000);

  // ============= 3. video (slick) =============
  $(".video-slider").slick({
    slide: "li",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slideToScroll: 1,
    speed: 500,
    dots: false,
    arrows: true,
    swipe: false,
    swipeToSlide: false,
    variableWidth: true,
    nextArrow: ".next",
    prevArrow: ".prev",
  });
});
