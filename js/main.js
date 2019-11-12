$(document).ready(function(){


	$('.review__items').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});
	$('.header__btn-menu').click(function(){
		$('.header__menu-item').slideToggle();
	});
	$('.header__btn-menu-close').click(function(){
		$('.header__menu-item').slideToggle();
	});
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;       
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



