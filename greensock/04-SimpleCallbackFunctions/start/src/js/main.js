(function($) {
	const onStart = () => console.log("animation started");
	const onUpdate = () => h2.text(i++);
	const onComplete = () => console.log("animation completed");
	var img = $('img'),
		h2 = $('h2');
		i = 0;

	// Simple Callback Functions
	TweenLite.from(img, 1, {
		x: -200, 
		ease:Power1.easeInOut,
		onStart: onStart,
		onUpdate: onUpdate,
		onComplete: onComplete,
	});

	// function onStart() {
	// 	console.log("animation is started");
	// }
	// function onUpdate() {
	// 	console.log("animation is in progree");
	// }
	// function onComplete() {
	// 	console.log("animation completed");
	// }

	
	

})(jQuery);