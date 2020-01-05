$(document).ready(function(){

	// Variables
	var controller,
		$navItem = $('.nav-items li').not('.active'),
		$navTrigger = $('.nav-trigger');

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

	// Navigation timeline
	var navTl = new TimelineMax();

	// move navigation right by 26px for each item
	$navItem.each(function(){

		var slideHREF = $(this).find('a').attr('href'),
			slideID = slideHREF.substr(slideHREF.length -7),
			moveNav = TweenMax.to($('.nav-active'), 1, {x: '+=26', ease:Linear.easeNone});

		// add individual tweens to the timeline
		navTl.add(moveNav, slideID);

	});

	// Scene 2 - move navigation
	var navScene = new ScrollMagic.Scene({
		triggerElement: $navTrigger,
		duration: '800%'
	})
	.setTween(navTl)
	.addTo(controller);

});














