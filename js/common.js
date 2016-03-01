$(document).ready(function() {

	/*Animated CSS*/
	$('.top_text h1').animated('fadeInDown','fadeOutUp');
	$('.top_text p').animated('fadeInUp','fadeOutDown');
	$('.sect_tittle').animated('fadeIn','fadeOut');
	$('.animate_me').animated('zoomIn','zoomOut');

	$('.popup').magnificPopup({type:'image'});

	function heightDetect(){
		$('.main_head').css('height',$(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$('.toggle_mnu').click(function() {
  	$('.sandwich').toggleClass('active');
	});

	$('.top_mnu ul a').click(function(){
		$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated');
			$('.sandwich').toggleClass('active');
			$('.top_text').removeClass('h_opacity');	
	});
	$('.toggle_mnu').click(function(){
		if($('.top_mnu').is(':visible')){
			$('.top_text').removeClass('h_opacity');
			$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated')	
		}else{
			$('.top_text').addClass('h_opacity');
			$('.top_mnu').fadeIn(600);
			$('.top_mnu li a').addClass('fadeInUp animated')
		}	
	});
	
});
$(window).load(function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});