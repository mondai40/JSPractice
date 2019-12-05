$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	$(".project").each(function() {
		console.log(this)
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: "0.9",
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 200,
			colorStart: '#75C695'
		}) // this requires a plugin
		.addTo(controller);
	});

});


















