// js for toggle structure
$('.toggle-view li').click(function () {
	var text = $(this).children('div.panel');
	if (text.is(':hidden')) {
		text.slideDown('200');
		$(this).find('span').addClass('toggle-minus');
		$(this).addClass('activated');
	} else {
		text.slideUp('200');
		$(this).find('span').removeClass('toggle-minus');
		$(this).find('span').addClass('toggle-plus');
		$(this).removeClass('activated');
	}

});