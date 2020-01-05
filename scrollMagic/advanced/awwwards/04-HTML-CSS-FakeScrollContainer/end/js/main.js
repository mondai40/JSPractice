$(document).ready(function(){

	// Variables
	var controller;

	// Init ScrollMagic Controller
	controller = new ScrollMagic.Controller();

	// Scene 1 - pin our main section
	var pinScene01 = new ScrollMagic.Scene({
		triggerElement: '#main',
		triggerHook: 0,
		duration: '900%'
	})
	.setPin("#main .pin-wrapper", {pushFollowers: false})
	.addTo(controller);


});
