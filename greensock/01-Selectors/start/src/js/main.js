// (function($) {
    
	// JS code goes here
	// var header = $("#header"),
	// 	h1 = $("h1"),
	// 	intro = $(".intro"),
	// 	firstItem = $("li:first-child"),
	// 	secondItem = $("li:nth-child(2)"),
	// 	lastItem = $("li:last-child");

	var header = document.getElementById("header"),
		h1 = document.getElementsByTagName("h1"),
		intro = document.getElementsByClassName("intro")[0];
		firstItem = document.getElementsByClassName("list")[0].firstElementChild,
		secondItem = document.getElementsByClassName("list")[0].children[1],
		lastItem = document.getElementsByClassName("list")[0].lastElementChild;

	TweenLite.to(lastItem, 3, {opacity: 0, x: 50});
// })(jQuery);