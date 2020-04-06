$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });




  $('.scroll').click(function (e) {
    event.preventDefault();


    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 140
    }, 1500);

  });


  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu, .nav-contacts').slideToggle(200);
  });

  $('.menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })


  if ($(window).width() < 1200) {
    $('.menu li a').click(function () {
      $('.menu, .nav-contacts').hide();
    })
    $('.info_bl .h2-title').html('<span>Кажется, <br>что</span> реализовать <br>недвижимость <br><span>— это просто</span>, Но...');

    $('.mob-hide').hide();
    $('.mob-show').show();

    $('.cases_more-btn.show').click(function () {
      $('.cases-carousel').slick('refresh');
    });

    $("#slider").slick({
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      speed: 300,
      prevArrow: '<button type="button" class="prev">‹</button>',
      nextArrow: '<button type="button" class="next">›</button>',
      rows: 1,
      slidesPerRow: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
    },
      {
        breakpoint: 600,
        settings: {
          dots: true

        }
    },
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
    }
  ]
    });

    $('#slider img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })

    $('.head-img img').each(function () {
      $(this).attr('src', $('.head-img img').data('src'));
    })
  } else {
    var $slider = $("#slider");
    $slider.on("init", function () {
      mouseWheel($slider);
    }).slick({
      dots: false,
      centerMode: true,
      arrows: true,
      prevArrow: '<button type="button" class="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M990 737l-29 29-461-474L39 765l-29-28 461-473 29-29 29 28v1l461 473z"/></svg></button>',
      nextArrow: '<button type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M961 241L500 702 39 241l-29 29 461 461 29 29 29-29 461-461-29-29z"/></svg></button>',
      vertical: true,
      slidesToShow: 2,
      verticalSwiping: true,
      infinite: true
    });

    function mouseWheel($slider) {
      $('.slider-reviews').on("wheel", {
        $slider: $slider
      }, mouseWheelHandler);
    }

    function mouseWheelHandler(event) {
      event.preventDefault();
      var $slider = event.data.$slider;
      var delta = event.originalEvent.deltaY;

      if (delta < 0) {
        $slider.slick("slickPrev");
      } else {
        $slider.slick("slickNext");
      }
    }



    /*
        $(".slider-reviews").mousemove(function (event) {

          if (event.pageX > 0 || event.pageY > 0) {
            $(this).find('#cursor').offset({
              left: event.pageX,
              top: event.pageY + 70
            });
          }
        });*/

    $(".play-btn .box").mousemove(function (event) {

      if (event.pageX > 0 || event.pageY > 0) {
        $(this).parent().find('img').offset({
          left: event.pageX - 70,
          top: event.pageY - 70
        });
      }
    });
  }







  $(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 1200) {

      $('.info_bl .h2-title').html('<span>Кажется, <br>что</span> реализовать <br>недвижимость <br><span>— это просто</span>, Но...');

      $('.mob-hide').hide();
      $('.mob-show').show();

      $('.cases_more-btn.show').click(function () {
        $('.cases-carousel').slick('refresh');
      });

      $("#slider").slick({
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        prevArrow: '<button type="button" class="prev">‹</button>',
        nextArrow: '<button type="button" class="next">›</button>',
        rows: 1,
        slidesPerRow: 1
      });

      $('#slider img[data-src]').each(function () {
        $(this).attr('src', $(this).data('src'));

      })

      $('.head-img img').each(function () {
        $(this).attr('src', $('.head-img img').data('src'));
      })
    } else {

      $(".play-btn .box").mousemove(function (event) {

        if (event.pageX > 0 || event.pageY > 0) {
          $(this).parent().find('img').offset({
            left: event.pageX - 70,
            top: event.pageY - 70
          });
        }
      });
    }




  });



  $('.cases-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: ' ',
    nextArrow: '<button type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="108"><defs><path fill="#FF5B01" d="M64 101l51-47L64 6 53 17l26 25 3 3H7v17h75l-3 3-26 26 11 10m0 3L51 91l27-27H5V44h73L51 17 64 4l54 50-54 50z"/></defs><use xlink:href="#a" overflow="visible" fill="#FF5B01"/></svg></button>',
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
           prevArrow: '<button type="button" class="prev">‹</button>',
        nextArrow: '<button type="button" class="next">›</button>',
          dots: true
        }
    },
      {
        breakpoint: 600,
        settings: {
           prevArrow: '<button type="button" class="prev">‹</button>',
        nextArrow: '<button type="button" class="next">›</button>',
          dots: true

        }
    },
      {
        breakpoint: 480,
        settings: {
          prevArrow: '<button type="button" class="prev">‹</button>',
        nextArrow: '<button type="button" class="next">›</button>',
          dots: true
        }
    }
  ]
  });


  $('.cases_more-btn.hide').click(function () {
    $(this).parents(".cases-item").find('.cases-more').hide(200);
    $(this).parents(".cases-item").addClass('open');
    $(this).parents(".cases-item").find('.cases_more-btn').show(200);

    var top = $(this).parents(".cases-item").offset().top;

    $('body,html').animate({
      scrollTop: top - 140
    }, 300);

  })

  $('.cases_more-btn.show').click(function () {
    $(this).parents(".cases-item").find('.cases-more').show(200);
    $(this).parents(".cases-item").removeClass('open');
    $(this).hide(200);
  })



  $('input[name="phone"]').inputmask({
    "mask": "+38(999) 999-9999"
  });



  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 50%;right: 10px;     transform: translateY(-50%);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });


  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



    /*
        $.ajax({
          type: 'POST',
          url: 'crm/index.php',
          dataType: 'json',
          data: $form.serialize(),
          success: function (response) {}
        });
    */

    setTimeout(function () {
      window.location.href = "success.html";
    }, 800);

  });


  $('[href="#reg"]').click(function () {
    $('#reg input[name="type"]').val($(this).data('title'));
    $('#reg .title').text($(this).data('title'));
    $('#reg .order-btn').text($(this).data('text_btn'));
  })

  var observer = lozad();
  observer.observe();
});
