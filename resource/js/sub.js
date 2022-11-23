'use strice'; //'use strict'

($(function(){
	$('html').pageInit();
	lnbFn();
	
	$('header, footer').addClass('sub');
}))

function lnbFn(){
	$('.lnb-depth--02').prev('a').attr('href', 'javascript:void(0)').parents('.lnb-item').addClass('hasChild');
}

$.fn.setSnbMenu = function () {
	$('> a', this).click(function () {
		const lnbItem = $(this).parent();
		const sibling = lnbItem.siblings();
		const lnbItemDepth2 = $('>ul', lnbItem);

		sibling.removeClass('active');
		$('ul', sibling).slideUp("fast");
		lnbItem.toggleClass('active');

		if (lnbItemDepth2.length > 0) {
			lnbItemDepth2.slideToggle("fast", function () {
			});
			return false;
		} else if ($(this).attr('target') != '_blank') {
		}
	});
};

$.fn.pageInit = function () {
	$('.lnb-item').setSnbMenu();
};