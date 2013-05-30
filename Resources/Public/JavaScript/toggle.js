// js for toggle structure
$('#toggle-view li').click(function () {
	var text = $(this).children('div.panel');
	if (text.is(':hidden')) {
		text.slideDown('200');
		$(this).children('span').addClass('toggle-minus');
		$(this).addClass('activated');
	} else {
		text.slideUp('200');
		$(this).children('span').removeClass('toggle-minus');
		$(this).children('span').addClass('toggle-plus');
		$(this).removeClass('activated');
	}

});