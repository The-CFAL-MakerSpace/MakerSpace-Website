$(document).ready(function(){"use strict";var pgurl=window.location.href.substr(window.location.href.lastIndexOf("/")+1);$("nav ul li a").each(function(){if($(this).attr("href")==pgurl||$(this).attr("href")=="")
$(this).parent("li").addClass("active").parent().parent().addClass("active").parent().parent().addClass("active");});var pgurl=window.location.href.substr(window.location.href.lastIndexOf("/")+1);$(".menu-wrap ul li a").each(function(){if($(this).attr("href")==pgurl||$(this).attr("href")=="")
$(this).parent("li").addClass("active").parent().parent().addClass("active-parent").parent().parent().addClass("active-parent");});$(".thm-btn").on("mouseenter",function(e){var parentOffset=$(this).offset(),relX=e.pageX-parentOffset.left,relY=e.pageY-parentOffset.top;$(this).find("span").css({top:relY,left:relX});}).on("mouseout",function(e){var parentOffset=$(this).offset(),relX=e.pageX-parentOffset.left,relY=e.pageY-parentOffset.top;$(this).find("span").css({top:relY,left:relX});});$(".nav-tabs > li").each(function(){$(".nav-tabs > li a").on("click",function(){$(this).parents().find("li").removeClass("active");$(this).parent().addClass("active");});});$(".user-btn").on("click",function(){$(".login-popup-wrap").addClass("active");return false;});$("html, body").on("click",function(){$(".login-popup-wrap").removeClass("active");});$(".login-popup-inner").on("click",function(event){event.stopPropagation();});var width=window.innerWidth;$(".search-btn").on("click",function(){$(".header-search").addClass("active");return false;});$(".search-close-btn").on("click",function(){$(".header-search").removeClass("active");return false;});if($(".wow").length>0){var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:true,live:true,});wow.init();}
$(".menu-btn, .menu-btn2").on("click",function(){$("body").addClass("slidein");return false;});$("html, body, .menu-close").on("click",function(){$("body").removeClass("slidein");});$(".menu-wrap").on("click",function(event){event.stopPropagation();});$(".menu-wrap li.menu-item-has-children > a").on("click",function(){$(this).parent().siblings("li").children("ul").slideUp();$(this).parent().siblings("li").removeClass("active");$(this).parent().children("ul").slideToggle();$(this).parent().toggleClass("active");return false;});if($(".menu-wrap").length>0){var ps=new PerfectScrollbar(".menu-wrap");}
if($(".lang-slct > select, .slc-wp > select").length>0){$(".lang-slct > select, .slc-wp > select").selectpicker();}
if($(".qty").length>0){$(".qty").TouchSpin();}
if(width>851){if($(".page-wrap > div.row > div").length>0){$(".page-wrap > div.row > div").theiaStickySidebar({additionalMarginTop:60,additionalMarginBottom:60,});}}
if($(".toggle").length>0){$(function(){$("#toggle .toggle-content").hide();$("#toggle h4:first").next().slideDown(500).parent().addClass("active");$("#toggle h4").on("click",function(){if($(this).next().is(":hidden")){$("#toggle h4").next().slideUp(500).parent().removeClass("active");$(this).next().slideDown(500).parent().toggleClass("active");}});});}
if($("#toggle2").length>0){$(function(){$("#toggle2 .toggle-content2").hide();$("#toggle2 h4:first").next().slideDown(500).parent().addClass("activate");$("#toggle2 h4").on("click",function(){$(this).next().slideToggle("slow").parent().toggleClass("activate");});});}
if($.isFunction($.fn.counterUp)){$(".counter").counterUp({delay:10,time:2000,});}
if($.isFunction($.fn.downCount)){$(".countdown").downCount({date:"12/07/2023 12:00:00",offset:+5,});}
if($.isFunction($.fn.fancybox)){$('[data-fancybox],[data-fancybox="gallery"]').fancybox({});}
if($("#email-form").length){$("#submit").click(function(){var o=new Object();var form="#email-form";var fname=$("#email-form .fname").val();var lname=$("#email-form .lname").val();var email=$("#email-form .email").val();var phone=$("#email-form .phone").val();if(fname==""||email==""){$("#email-form .response").html('<div class="failed alert alert-warning">Please fill the required fields.</div>');return false;}
$.ajax({url:"sendemail.php",method:"POST",data:$(form).serialize(),beforeSend:function(){$("#email-form .response").html('<div class="text-info"><img src="assets/images/preloader.gif"> Loading...</div>');},success:function(data){$("form").trigger("reset");$("#email-form .response").fadeIn().html(data);setTimeout(function(){$("#email-form .response").fadeOut("slow");},5000);},error:function(){$("#email-form .response").fadeIn().html(data);},});});}
if(width<851){if($.isFunction($.fn.slick)){$(".res-caro").slick({slidesToShow:2,slidesToScroll:1,dots:true,arrows:false,centerPadding:"0",focusOnSelect:true,responsive:[{breakpoint:851,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,arrows:false,},},{breakpoint:771,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,arrows:false,},},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,centerMode:true,arrows:false,},},],});}}
if($.isFunction($.fn.slick)){$(".feat-caro").slick({arrows:true,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,autoplay:false,autoplaySpeed:6000,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",speed:1500,draggable:true,dots:false,pauseOnDotsHover:true,pauseOnFocus:false,pauseOnHover:false,prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i>Prev Event</button>",nextArrow:"<button type='button' class='slick-next'>Next Event<i class='flaticon-trajectory'></i></button>",responsive:[{breakpoint:981,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,dots:true,},},{breakpoint:851,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,dots:true,},},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,dots:true,},},],});$(".feat-caro2").slick({arrows:true,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,autoplay:false,autoplaySpeed:6000,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",speed:1000,draggable:true,dots:false,pauseOnDotsHover:true,pauseOnFocus:false,pauseOnHover:false,prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i>Prev Conference</button>",nextArrow:"<button type='button' class='slick-next'>Next Conference<i class='flaticon-trajectory'></i></button>",});$(".about-img-caro").slick({arrows:false,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,autoplay:true,autoplaySpeed:5000,speed:1000,draggable:true,dots:true,pauseOnDotsHover:true,pauseOnFocus:false,pauseOnHover:false,});$(".blog-caro").slick({slidesToShow:2,slidesToScroll:1,dots:false,arrows:true,centerPadding:"0",focusOnSelect:true,vertical:false,prevArrow:"<button type='button' class='slick-prev'><img src='assets/images/arrow-left.png' alt='Arrow Left'></button>",nextArrow:"<button type='button' class='slick-next'><img src='assets/images/arrow-right.png' alt='Arrow Right'></button>",responsive:[{breakpoint:981,settings:{slidesToShow:2,slidesToScroll:1,arrows:true,},},{breakpoint:851,settings:{slidesToShow:1,slidesToScroll:1,},},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,},},],});$(".testi-caro").slick({slidesToShow:1,slidesToScroll:1,dots:false,arrows:true,fade:true,asNavFor:".testi-nav-caro",prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",nextArrow:"<button type='button' class='slick-next'><i class='flaticon-trajectory'></i></button>",responsive:[{breakpoint:850,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:false,},},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:true,arrows:false,},},],});$(".testi-nav-caro").slick({slidesToShow:2,slidesToScroll:1,asNavFor:".testi-caro",dots:false,arrows:false,centerPadding:"0",focusOnSelect:true,responsive:[{breakpoint:850,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,dots:false,arrows:false,},},{breakpoint:481,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,dots:false,arrows:false,},},],});$(".testi-caro2").slick({slidesToShow:5,slidesToScroll:1,dots:false,arrows:false,autoplay:true,autoplaySpeed:5000,centerPadding:"0",focusOnSelect:true,vertical:false,responsive:[{breakpoint:1201,settings:{slidesToShow:4,slidesToScroll:1,},},{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:1,},},{breakpoint:851,settings:{slidesToShow:3,slidesToScroll:1,},},{breakpoint:771,settings:{slidesToShow:2,slidesToScroll:1,},},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,},},],});$(".sponsor-caro").slick({slidesToShow:4,slidesToScroll:1,dots:false,arrows:true,autoplay:false,autoplaySpeed:5000,centerPadding:"0",focusOnSelect:true,prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",nextArrow:"<button type='button' class='slick-next'><i class='flaticon-trajectory'></i></button>",responsive:[{breakpoint:1201,settings:{slidesToShow:4,slidesToScroll:1,},},{breakpoint:1025,settings:{slidesToShow:4,slidesToScroll:1,arrows:false,autoplay:true,},},{breakpoint:851,settings:{slidesToShow:3,slidesToScroll:1,arrows:false,autoplay:true,},},{breakpoint:771,settings:{slidesToShow:3,slidesToScroll:1,arrows:false,autoplay:true,},},{breakpoint:481,settings:{slidesToShow:2,slidesToScroll:1,},},],});$(".tweet-caro").slick({arrows:false,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,autoplay:true,autoplaySpeed:5000,speed:1000,draggable:true,dots:true,pauseOnDotsHover:true,pauseOnFocus:false,pauseOnHover:false,});$(".gallery-caro").slick({slidesToShow:4,slidesToScroll:1,dots:false,arrows:true,centerPadding:"0",focusOnSelect:true,prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",nextArrow:"<button type='button' class='slick-next'><i class='flaticon-trajectory'></i></button>",responsive:[{breakpoint:1025,settings:{slidesToShow:4,slidesToScroll:1,arrows:false,autoplay:true,},},{breakpoint:980,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,arrows:false,autoplay:true,},},{breakpoint:851,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,arrows:false,autoplay:true,},},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,centerMode:true,},},],});$(".gallery-caro2").slick({slidesToShow:1,slidesToScroll:1,dots:true,arrows:true,autoplay:true,autoplaySpeed:3000,fade:true,centerPadding:"0",prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",nextArrow:"<button type='button' class='slick-next'><i class='flaticon-trajectory'></i></button>",focusOnSelect:true,responsive:[{breakpoint:980,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,arrows:false,autoplay:true,},},{breakpoint:851,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,arrows:false,autoplay:true,},},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,arrows:false,centerMode:true,},},],});}});jQuery(window).on("load",function(){"use strict";var width=window.innerWidth;var menu_height=$("header").innerHeight();$(window).on("scroll",function(){var scroll=$(window).scrollTop();if(scroll>=menu_height){$("header.stick").addClass("sticky");}else{$(".stick").removeClass("sticky");}});if(jQuery(".fltr-itm").length>0){if(jQuery().isotope){var jQuerycontainer=jQuery(".masonry");jQuerycontainer.isotope({itemSelector:".fltr-itm",columnWidth:0.1,});jQuery(".filter-links a").on("click",function(){var selector=jQuery(this).attr("data-filter");jQuery(".filter-links li").removeClass("active");jQuery(this).parent().addClass("active");jQuerycontainer.isotope({filter:selector});return false;});jQuerycontainer.isotope("layout");}
jQuery(window).resize(function(){if(jQuery().isotope){jQuery(".masonry").isotope("layout");}});}});const countDownDateTime=new Date(2022,10,24,0,0,0,0).getTime();const daysValue=document.getElementsByClassName("days");const hoursValue=document.getElementsByClassName("hours");const minutesValue=document.getElementsByClassName("minutes");const secondsValue=document.getElementsByClassName("seconds");let x=setInterval(function(){const dateTimeNow=new Date().getTime();let difference=countDownDateTime-dateTimeNow;for(let index=0;index<3;index++){daysValue[index].innerHTML=Math.floor(difference/(1000*60*60*24));hoursValue[index].innerHTML=Math.floor((difference%(1000*60*60*24))/(1000*60*60));minutesValue[index].innerHTML=Math.floor((difference%(1000*60*60))/(1000*60));secondsValue[index].innerHTML=Math.floor((difference%(1000*60))/1000);}
if(difference<0){clearInterval(x);}},1000);