$(document).ready(function () {
	const swiper = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 5000,
		}
	});

	$('.header-container').on('click', '.menu-button', function () {
		$('.header-container').toggleClass('menu-opened')
	})
});