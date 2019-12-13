(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// Simple Tween
	TweenLite.from(img, 3, {x: -200, ease: SteppedEase.config(20)});
	TweenLite.from(h2, 3, {autoAlpha: 0, delay: 3});

})(jQuery);