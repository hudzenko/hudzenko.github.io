$(function(){
	$('#fullpage').fullpage({
        anchors: ['header','portfolio','contact'],
        scrollingSpeed: 1000,
        normalScrollElements: '.popup' 
    });


    var portfolioSlider = new Swiper ('.portfolio-slider', {
    	pagination: '.portfolio-slider__pagination',
    	slidesPerColumn: 3,
    	slidesPerView: 4,
    	spaceBetween: 10,
    	paginationClickable: true
	});

	(function formMagic(){
		$('.contact__text-input, .contact__textarea').on('focus', function(){
			$('.contact__title').removeClass('pulse-animated');
			$('.contact__title').addClass('inset-shadow');
			$(this).unbind('focus');
		});

	})();

	(function popupInit(){
		$('.portfolio-slider__item').on('click', function(){
			$('.popup').addClass('popup_visible');
		    $('.popup__img').attr('src', $(this).data('img'));
		    $('.popup__title').text($(this).find('.portfolio-item__name').text());
		    $('.popup__text').html($(this).find('.portfolio-item__text').html());
		    $('.popup__technologies').text($(this).find('.portfolio-item__technologies').text());
		});
		$('.popup__close-wrap').on('click', function(){
    		$('.popup').removeClass('popup_visible');
  		}); 
	})();
	
  
  
});