//tabs function
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