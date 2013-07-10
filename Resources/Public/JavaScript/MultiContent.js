// this helps switching tabs in backend
$('.lelesys-plugin-multicontent-tabitem').attr('style', 'display: none;');
$('.tab-content .tab-pane:first').addClass('active').closest('.lelesys-plugin-multicontent-tabitem').attr('style', 'display: block;');

// activate first carousel item
$('ol.carousel-indicators li:first').addClass('active');
$('.carousel-inner .item:first').addClass('active');