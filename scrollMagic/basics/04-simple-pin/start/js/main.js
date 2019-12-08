$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntro = new ScrollMagic.Scene({
		triggerElement: "#intro",
		triggerHook: 0,
	})
	.setPin("#intro")
	.addTo(controller);

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.5
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

});


















