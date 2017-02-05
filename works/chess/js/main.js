$(function(){
	$('.myField').click(function(e){		
    if(!($(e.target).hasClass('main-chess') || $(e.target).hasClass('main-cell'))){
      alert('Please click on F5');
      return;
    }
		 $('.main-cell').addClass('selected');
		 $('.go-cell').css('border','3px solid green');
		 $('.hit-cell').css('border','3px solid red');

		 $(this).unbind("click");  
	});

	$(".go-cell, .hit-cell").click(function(){

		if(!($('.main-cell').hasClass('selected')))	return;

		$('.main-cell').removeClass('selected');

		$('.go-cell').css('border','');
		$('.hit-cell').css('border','');

		var myFigure = $('.main-cell').find("img")[0];


		var top = $(this).offset().top;
		var left = $(this).offset().left;
		var thisTop = $(myFigure).offset().top;
		var thisLeft = $(myFigure).offset().left;

		var dTop = top-thisTop+10;
		var dLeft = left-thisLeft+7;
		$(myFigure).css('position', 'absolute');
		$(myFigure).css('left', thisLeft);
		$(myFigure).css('top', thisTop);

		if ($(this).hasClass('go-cell'))
		{
			$(myFigure).animate({top: "+="+dTop}, "slow");
		}
		else
		{
			$(myFigure).animate({
				left: "+="+dLeft,
				top: "+="+dTop
			},"slow")
		}
		if ($(this).find("img").length>0) {

			$(this).find("img").fadeOut("slow")
		};

		$(".go-cell, .hit-cell").unbind("click");
	});
});