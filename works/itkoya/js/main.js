$(function(){

	var projSwiper = new Swiper('.mProjects-slider', {
        pagination: '.mProjects__swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2500,
      	autoplayDisableOnInteraction: false
  });

  var FeedSwiper = new Swiper('.mFeedbacks-slider', {
      pagination: '.mFeedbacks__swiper-pagination',
      slidesPerView: 3,
      initialSlide: 1,
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 15,
      loop: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
  });

	var myTab = function(tabHeader, tabTitleClass, tabItemClass){
		this.tabItems = $('.'+tabItemClass).toArray();
		this.tabTitles = $('.'+tabTitleClass).toArray();

		this.selectedItem = tabItemClass +'_selected';
		this.selectedTitle = tabTitleClass +'_selected';


		var __self = this;

		tabHeader.click(function(e){
		e.preventDefault();

		if(!($(e.target).is('a'))) return;
    var tabIndex = $(e.target).data('index');

    if($(__self.tabItems[tabIndex]).hasClass(__self.selectedItem)) return;

    $.each(__self.tabTitles, function(index, item){
				$(item).removeClass(__self.selectedTitle);
        });

    $(__self.tabTitles[tabIndex]).addClass(__self.selectedTitle);

		$.each(__self.tabItems, function(index, item){
				$(item).removeClass(__self.selectedItem);
        });

		$(__self.tabItems[tabIndex]).addClass(__self.selectedItem);
		
	});

	};

	var firstTab = new myTab($('.validation-block__header'),'validation-block__item','validation-block__content');
	var secondTab = new myTab($('.mAbout-slide__header'),'mAbout-slide__item','mAbout-slide__content');
	var mainTab = new myTab($('.main-slider_navigation-list'),'main-slider__nav-link','main-slider__item');
	var thirdTab = new myTab($('.mWhyKoya-slide__header'),'mWhyKoya-slideHead__item','mWhyKoya-slide__item');
	var fourTab = new myTab($('.mHowWork-slide__header'),'mHowWork-slideHead__item','mHowWork-slide__item');

});

