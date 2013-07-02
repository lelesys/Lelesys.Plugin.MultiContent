// js for toggle structure
$('.toggle-view li').click(function() {
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
// end of js for toogle
// js for slider + jquery.tinycarousel.min.js is required for slider
$('.multi-slider').each(function() {
	var view_port_width = $(this).find('.viewport').width();
	var padding_left = $(this).find('.viewport li').css('padding-left');
	var padding_right = $(this).find('.viewport li').css('padding-left');
	var width = view_port_width - (parseInt(padding_left) + parseInt(padding_right));
	$(this).find('.viewport li').width(width);
	var properties = $.parseJSON($(this).find('span.properties').attr('data-type'));
	$(this).tinycarousel({
		start: parseInt(properties['start']),
		display: parseInt(properties['display']),
		controls: properties['controls'],
		interval: properties['interval'],
		intervaltime: parseInt(properties['intervaltime']),
		animation: properties['animation'],
		duration: parseInt(properties['duration']),
		callback: function(element, index) {
		}
	});
	var over_view_height = $(this).find('.viewport ul').height();
	$(this).find('.viewport').height(over_view_height);
	if (!properties['controls']) {
		$(this).find('.viewport').children('a.buttons').addClass('hide');
	}
});
// end of js for slider
// js for tabs structure
$('.tabs-wrapper').each(function() {
	$(this).find(".tab-content").hide(); //Hide all content
	$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(this).find(".tab-content:first").show(); //Show first tab content
});
$("ul.tabs li").click(function(e) {
	$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
	$(this).addClass("active"); //Add "active" class to selected tab
	$(this).parents('.tabs-wrapper').find(".tab-content").hide(); //Hide all tab content

	var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
	$("li.tab-item:first-child").css("background", "none" );
	$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
	e.preventDefault();
});
$("ul.tabs li a").click(function(e) {
	e.preventDefault();
})
$("li.tab-item:last-child").addClass('last-item');
// end of js for tabs