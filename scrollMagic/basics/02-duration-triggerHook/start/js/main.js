$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01 img',	//starting position
		duration: "90%",				//animation hight % refers to view height
		triggerHook: 0.9,				//trigger position
	})
	.setClassToggle('#project01', 'fade-in') // add class to project01
	.addIndicators({
		name: 'fade scene', 	//common name
		colorTrigger: 'black',	
		colorStart: '#75C695',
		colorEnd: "pink",
	}) // this requires a plugin
	.addTo(controller);

});


















