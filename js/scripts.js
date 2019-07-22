$(document).ready(function() {

	"use strict";

	/* ================= sliders =================  */
			/* =================  Owl Carousel products =============  */

			$(".productsSlider").owlCarousel({
				loop: true,
				nav: true,
				animateOut: 'fadeOutLeft',
    			animateIn: 'bounceInRight',
				dots: false,
				autoplay: true,
		 	    autoplayTimeout: 4000,
				autoplayHoverPause:true,
		 	    smartSpeed:1000,
				margin : 20,
				responsiveClass: true,
				responsive: {
					0: {
							items: 2,
					},
					575: {
							items: 3,
					},
					767:{
						items: 5,
					}
				}
			});
			$(".offerProducts").owlCarousel({
				loop: true,
				nav: true,
				animateOut: 'fadeOutLeft',
    			animateIn: 'bounceInRight',
				dots: false,
				autoplay: true,
		 	    autoplayTimeout: 4000,
				autoplayHoverPause:true,
		 	    smartSpeed:1000,
				margin : 20,
				responsiveClass: true,
				responsive: {
					0: {
							items: 2,
					},
					575: {
						items: 3,
					},
					767:{
						items: 2,
					}
				}
			});
	// =========== price slider ============
		if($("#range").length > 0){
			var maxval = $('#range').attr('data-maxval');
			var minval = $('#range').attr('data-minval');
			$("#range").ionRangeSlider({
				hide_min_max: true,
				keyboard: true,
				min: minval,
				max: maxval,
				from: 100,
				to: 1000,
				type: 'double',
				step: 1,
				prefix: "$",
				grid: false
			});
		}
	// ========== product slider =============
	if($('.sp-wrap').length > 0){
		$('.sp-wrap').smoothproducts();
	}
});


/* =================  window load =================  */

 $(window).on('load',function(){
		/*----- loader ---------*/
		$('.loader').fadeOut();
    
    /*----- WoW Animations ---------*/
      wow = new WOW();
    	wow.init();
});

	/* =================  window Scroll =================  */

 $(window).on('scroll , load',function(){
		var window_top = $(window).scrollTop();
		/*---------- menu fixed ----------*/

		if(window_top > 20){
			$('.main_header .bottom_header').addClass('header-scroll_bg_light');
		}
		else {
			$('.main_header .bottom_header').removeClass('header-scroll_bg_light');
		}

		/*---------- menu active item ----------*/

		$('#home , #home section').each(function () {
			var currLink = $(this);
			var refElement = $(currLink).attr("id");
				if ($(this).position().top -100 <= window_top) {
					if($('.nav-item .nav-link[href*='+refElement+']').length>0){
						$('.nav-item.active').removeClass('active');
						$('.nav-item .nav-link[href*='+refElement+']').parent().addClass('active');
					}
				}
		});

/*---------- go to top button ---------*/
    if(window_top > 600){
      $('.goto_top').fadeIn();
    }
    else {
      $('.goto_top').fadeOut();
    }
	});

  $('.goto_top').on('click',function(e){
    e.preventDefault();
		$('body , html').animate({
			scrollTop: 0
		},1000);
  })
/* =================  menu click animate =================  */

	$('.nav-item .nav-link').on('click',function(){
		var $target = $(this).attr('href');
		$('body , html').animate({
			scrollTop: $($target).position().top
		},1000);
		$('.navbar-collapse').removeClass('show');
		$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-align-right');
	});
	$('.navbar-toggler').on('click',function(){
		$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-align-right');
	});
// ====== wish list =============
$('.product .wish_list').on('click',function(e){
	e.preventDefault();
	var attr_val = $(this).find('svg').attr('data-prefix');
	if(attr_val == 'far') 
		{
			$(this).find('svg').attr('data-prefix','fas');
		}
	else 
		{
			$(this).find('svg').attr('data-prefix','far');
		}
	$(this).toggleClass('bounceIn');
})

		// ======rate===========
		(function($) {
			$('.rating .star').hover(function() {
				$(this).addClass('to_rate');
				$(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
				$(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
			}).mouseout(function() {
				$(this).parent().find('.star').removeClass('to_rate');
				$(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
			}).click(function() {
				$(this).removeClass('to_rate').addClass('rated');
				$(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
				$(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
				/*Save your rate*/
				/*TODO*/
  		});
		})(jQuery); 
		// show password 
		$('.show_pass').on('click',function(e){
			e.preventDefault();
			var _attr = $('#login-pass').attr('type');
			if(_attr == "password"){
				$('#login-pass').attr('type',"text");
			}
			else{
				$('#login-pass').attr('type',"password");
			}
		});
	/* ==== help accordion ======*/
		$('.help .card button').on('click',function(){
			$('.help .card button').removeClass("active");
			$('.help .card .collapse').removeClass("show");
			$(this).addClass("active");
		});