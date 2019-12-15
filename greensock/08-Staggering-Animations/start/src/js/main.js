(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineLite();

	// Staggering Animations
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		// .staggerFrom(buttons, 0.2, {x: 200, ease: Power1.easeOut}, 0.1);	//0.2: staggerが完了する時間。0.1: 次のstaggerが始まる時間
		// .staggerTo(buttons, 0.2, {x: -20, ease: Power1.easeOut}, 0.1);
		// .staggerFromTo(
		// 	buttons, 
		// 	0.2, 
		// 	{autoAlpha: 0, x: 10,},							//From position
		// 	{autoAlpha: 1, x: -10, ease: Power1.easeOut},	//To position
		// 	0.1);
		.staggerFrom(
			buttons, 
			1, 
			{
				cycle: {
					x: [50, -50],
					scale: [2, 4],
				},
				autoAlpha: 0,
				ease: Power1.easeOut,
			}, 
			1);


	$('#btnPlay').on('click',function(){
		tl.play();
	});

	$('#btnPause').on('click',function(){
		tl.pause();
	});

	$('#btnResume').on('click',function(){
		tl.resume();
	});

	$('#btnReverse').on('click',function(){
		tl.reverse();
	});

	$('#btnSpeedUp').on('click',function(){
		tl.timeScale(8);
	});

	$('#btnSlowDown').on('click',function(){
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click',function(){
		tl.seek(1);
	});

	$('#btnProgress').on('click',function(){
		tl.progress(0.5);
	});

	$('#btnRestart').on('click',function(){
		tl.restart();
	});

})(jQuery);






