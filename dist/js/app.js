$(document).ready(function(){function t(t){$(".slider-reviews").on("wheel",{$slider:t},e)}function e(t){t.preventDefault();var e=t.data.$slider,s=t.originalEvent.deltaY;s<0?e.slick("slickPrev"):e.slick("slickNext")}if($(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(t){event.preventDefault();var e=$(this).attr("href"),s=$(e).offset().top;$("body,html").animate({scrollTop:s-140},1500)}),$("#nav-icon").click(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))}),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu, .nav-contacts").slideToggle(200)}),$(".menu").hover(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})}),$(window).width()<1200)$(".menu li a").click(function(){$(".menu, .nav-contacts").hide()}),$(".info_bl .h2-title").html("<span>Кажется, <br>что</span> реализовать <br>недвижимость <br><span>— это просто</span>, Но..."),$(".mob-hide").hide(),$(".mob-show").show(),$(".cases_more-btn.show").click(function(){$(".cases-carousel").slick("refresh")}),$(".acquaintance-profile .img img").attr("src",$(this).data("src")),$("#slider").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:300,prevArrow:'<button type="button" class="prev">‹</button>',nextArrow:'<button type="button" class="next">›</button>',rows:1,slidesPerRow:1,responsive:[{breakpoint:1024,settings:{dots:!0}},{breakpoint:600,settings:{dots:!0}},{breakpoint:480,settings:{dots:!0}}]}),$("#slider img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))}),$(".head-img img").each(function(){$(this).attr("src",$(".head-img img").data("src"))});else{var s=$("#slider");s.on("init",function(){t(s)}).slick({dots:!1,centerMode:!1,arrows:!0,prevArrow:'<button type="button" class="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M990 737l-29 29-461-474L39 765l-29-28 461-473 29-29 29 28v1l461 473z"/></svg></button>',nextArrow:'<button type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M961 241L500 702 39 241l-29 29 461 461 29 29 29-29 461-461-29-29z"/></svg></button>',vertical:!0,slidesToShow:2,verticalSwiping:!0,infinite:!0}),$(".play-btn .box").mousemove(function(t){(t.pageX>0||t.pageY>0)&&$(this).parent().find("img").offset({left:t.pageX-70,top:t.pageY-70})})}$(window).on("resize",function(){var t=$(this);t.width()<1200?($(".info_bl .h2-title").html("<span>Кажется, <br>что</span> реализовать <br>недвижимость <br><span>— это просто</span>, Но..."),$(".cases_more-btn.show").click(function(){$(".cases-carousel").slick("refresh")}),$("#slider").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:300,prevArrow:'<button type="button" class="prev">‹</button>',nextArrow:'<button type="button" class="next">›</button>',rows:1,slidesPerRow:1}),$("#slider img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))}),$(".head-img img").each(function(){$(this).attr("src",$(".head-img img").data("src"))})):$(".play-btn .box").mousemove(function(t){(t.pageX>0||t.pageY>0)&&$(this).parent().find("img").offset({left:t.pageX-70,top:t.pageY-70})})}),$(".cases-carousel").slick({dots:!1,infinite:!0,speed:300,prevArrow:" ",nextArrow:'<button type="button" class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="108"><defs><path fill="#FF5B01" d="M64 101l51-47L64 6 53 17l26 25 3 3H7v17h75l-3 3-26 26 11 10m0 3L51 91l27-27H5V44h73L51 17 64 4l54 50-54 50z"/></defs><use xlink:href="#a" overflow="visible" fill="#FF5B01"/></svg></button>',rows:1,slidesPerRow:1,responsive:[{breakpoint:1024,settings:{prevArrow:'<button type="button" class="prev">‹</button>',nextArrow:'<button type="button" class="next">›</button>',dots:!0}},{breakpoint:600,settings:{prevArrow:'<button type="button" class="prev">‹</button>',nextArrow:'<button type="button" class="next">›</button>',dots:!0}},{breakpoint:480,settings:{prevArrow:'<button type="button" class="prev">‹</button>',nextArrow:'<button type="button" class="next">›</button>',dots:!0}}]}),$(".cases_more-btn.hide").click(function(){$(this).parents(".cases-item").find(".cases-more").hide(200),$(this).parents(".cases-item").addClass("open"),$(this).parents(".cases-item").find(".cases_more-btn").show(200);var t=$(this).parents(".cases-item").offset().top;$("body,html").animate({scrollTop:t-140},300)}),$(".cases_more-btn.show").click(function(){$(this).parents(".cases-item").find(".cases-more").show(200),$(this).parents(".cases-item").removeClass("open"),$(this).hide(200)}),$('input[name="phone"]').inputmask({mask:"+38(999) 999-9999"});var i,n='<svg style="width: 20px; position:absolute;top: 50%;right: 10px;     transform: translateY(-50%);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(t){t.preventDefault();var e=$(this).closest("form").find("[required]");$(e).each(function(){if(""==$(this).val()){$(this);if("email"==$(this).attr("type")){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;if(!t.test($(this).val()))return $("input[name=email]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+n+"</div>"),i=1,$(":input.error:first").focus(),!1}else{if("tel"!=$(this).attr("type"))return $(this).addClass("error").parent(".label").append('<div class="allert">'+n+"</div>"),i=1,$(":input.error:first").focus(),!1;var e=/^()[- +()0-9]{9,18}/i;if(!e.test($(this).val()))return $("input[name=phone]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+n+"</div>"),i=1,$(":input.error:first").focus(),!1}return i=1,!1}i=0,$(this).addClass("error").parent(".label").find(".allert").remove()}),1!==i&&$(this).unbind("submit").submit()}),$("form").on("submit",function(t){t.preventDefault();var e=$(this);e.find(".submit").addClass("inactive"),e.find(".submit").prop("disabled",!0),setTimeout(function(){window.location.href="success.html"},800)}),$('[href="#reg"]').click(function(){$('#reg input[name="type"]').val($(this).data("title")),$("#reg .title").text($(this).data("title")),$("#reg .order-btn").text($(this).data("text_btn"))});var r=lozad();r.observe()});