/* ===================================
--------------------------------------
  SolMusic HTML Template
  Version: 1.0
--------------------------------------
======================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	if($('.playlist-area').length > 0 ) {
		var containerEl = document.querySelector('.playlist-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>',
		label: '', // Sin texto "MENU"
		duration: 300,
		easingOpen: "easeOutCubic",
		easingClose: "easeInCubic"
	});
	
	$('.slicknav_nav').prepend('<li class="header-right-warp"></li>');
    $('.header-right').clone().prependTo('.slicknav_nav > .header-right-warp');

	// Mejorar la estructura del botón hamburguesa
	$('.slicknav_btn').each(function() {
		$(this).html('<div class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></div>');
	});

	// Manejar la animación del botón hamburguesa
	$('.slicknav_btn').on('click', function() {
		$(this).toggleClass('slicknav_open');
	});

	// Asegurar visibilidad del botón
	$('.slicknav_btn').css({
		'display': 'flex',
		'visibility': 'visible',
		'opacity': '1'
	});

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});

})(jQuery);

