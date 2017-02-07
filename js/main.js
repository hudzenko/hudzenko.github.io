$(function(){
	$('#fullpage').fullpage({
        anchors: ['header','portfolio','contact'],
        scrollingSpeed: 1000,  
    });


    var portfolioSlider = new Swiper ('.portfolio-slider', {
    	pagination: '.portfolio-slider__pagination',
    	slidesPerColumn: 3,
    	slidesPerView: 4,
    	spaceBetween: 10
	});

	(function formMagic(){
		$('.contact__text-input, .contact__textarea').on('focus', function(){
			$('.contact__title').removeClass('pulse-animated');
			$('.contact__title').addClass('inset-shadow');
			$(this).unbind('focus');
		});

	})();
});