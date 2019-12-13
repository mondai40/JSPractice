(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add("intro")
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})	//1 second later after previous one
		.from(img, 3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})			//3 seconds later after load the page, absolute
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, "intro+=1")	//relative
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

})(jQuery);