(function($) {
    
	var img = $('img');
	var h2 = $("h2");

	// Simple Tween
	TweenLite.from(img, 3, {x: -200});
	TweenLite.from(h2, 3, {autoAlpha: 0, delay: 3});
})(jQuery);