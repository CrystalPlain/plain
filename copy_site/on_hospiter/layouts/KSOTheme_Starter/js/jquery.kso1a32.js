
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 300) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

jQuery(document).ready(function($) {

  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

  $(".fitvids").fitVids();	

  var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 3,
    spaceBetween: 0
  });

  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }    
  });

  wow = new WOW({
  	boxClass:     'wow',      // default
  	animateClass: 'animated', // default
  	offset:       0,          // default
  	mobile:       true,       // default
  	live:         true        // default
  })
  wow.init();

  $(".menu-overlay a").click(function () {
      $(".overlay-area").fadeToggle(200);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
  $('.menu a').on('click', function () {
      $(".overlay-area").fadeToggle(200);
      $(".menu-overlay a").toggleClass('btn-open').toggleClass('btn-close');
  });  
  $('.overlay-area').on('click', function () {
      $(".overlay-area").fadeToggle(200);
      $(".menu-overlay a").toggleClass('btn-open').toggleClass('btn-close');
  }); //overlay menu

  $('#owl-caption').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout:5000,
    mouseDrag: false
  });

});

$(function() {
    var menu = $(".menu-siderbar");
    var menuItem = menu.find(".nav-item");

    menuItem.find(".nav-link-parent").click(function() {
        var parentItem = $(this).parent();
        var isOpen = parentItem.hasClass("open");

        menuItem.each(function(i, element) {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
            }
        });

        if (isOpen) {
            parentItem.removeClass("open");
        }
        else {
            parentItem.addClass("open");
        }
    });
}); //sidebar

$(function() {

  var UI = {
    init: function() {
      this.quickMenuFn();
      this.topBtn();
    },

    initialize: function() {
      this.id = {
        target: {
          quick: '#quick',
          stickyTop: '#footer'
        },
        topBtnClass: 'btn_top'
      };
      this.init();
    },

    quickMenuFn: function() {
      var quick = $(this.id.target.quick);
      var qTop = parseInt(quick.css('top'));

      $(window).scroll(function() {
        var winTop = $(window).scrollTop();

        quick.stop().animate({
          top: winTop + qTop
        }, 400);

      })
    },

    topBtn: function() {
      var btnLocation = $('.' + this.id.topBtnClass);
      var timerId = 0;

      $(window).on('scroll', function() {
        var winTop = $(window).scrollTop();
        if (winTop > 200) {
          btnLocation.fadeIn();
          clearInterval(timerId);
          timerId = setInterval(btnEffet, 1000);
        } else {
          btnLocation.fadeOut();
          clearInterval(timerId);
        }

      });

      function btnEffet() {
        btnLocation.fadeTo('300', 0.3).fadeTo('300', 1);
      }

      this.scrollTop(btnLocation);
    },

    scrollTop: function(eTarget, speed) {
      var speed = speed || null;
      eTarget.on('click', function() {
        $('html, body').animate({
          scrollTop: $("body").offset().top
        }, speed)
      })
    }

  };

  $(function() {
    UI.initialize();
  })

})