(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Controlling Timeline Playback
	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

	tl.pause();

	$("#btnPlay").on("click", function() {
		tl.play();
	});
	$("#btnPause").on("click", function() {
		tl.pause();
	});
	$("#btnResume").on("click", function() {
		tl.resume();
	});
	$("#btnReverse").on("click", function() {
		tl.reverse();
	});
	$("#btnSpeedUp").on("click", function() {
		tl.timeScale(8);
	});
	$("#btnSlowDown").click(function() {
		tl.timeScale(0.5);
	});
	$("#btnSeek").on("click", function() {
		tl.seek(1);	//指定した時間（秒）の状態に遷移する。（1秒後の状態に遷移する）
	});
	$("#btnProgress").on("click", function() {
		tl.progress(0.8); //指定した時間（%）の状態に遷移する。（50%の処理が終わった状態に遷移する）
	});
	$("#btnRestart").on("click", function() {
		tl.restart(); //tl.seek(0)と同じ状態
	});


})(jQuery);






