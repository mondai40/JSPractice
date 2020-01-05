$(document).ready(function(){

	// Variables
	var controller,
		$navItem = $('.nav-items li').not('.active'),
		$navTrigger = $('.nav-trigger'),
		getTriggersDown = $('.slide-pos'),
		triggersDown = [],
		getTriggersUp = $('.slide-pos-reverse'),
		triggersUp = [];

	// triggers on the way down
	$.each(getTriggersDown, function(key, value){

		var id = '#'+value.id;
		triggersDown.push(id);
		console.log(triggersDown[key]);

	});

	// triggersDown = [
	// 	"#slide02-pos",
	// 	"#slide03-pos",
	// 	"#slide04-pos",
	// 	"#slide05-pos",
	// 	"#slide06-pos",
	// 	"#slide07-pos",
	// 	"#slide08-pos",
	// 	"#slide09-pos"
	// ]

	// triggers on the way up
	$.each(getTriggersUp, function(key, value){

		var id = '#'+value.id;
		triggersUp.push(id);
		console.log(triggersUp[key]);

	});

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

	// Scene 3 - trigger the right animation on the way DOWN
	triggersDown.forEach(function(triggerDown, index){

		var triggerTransitionToNext = new ScrollMagic.Scene({
			triggerElement: triggerDown,
			triggerHook: 0.6
		})
		.on('enter', function(e){

			console.log('crossfade to next '+triggerDown);

		})
		.addIndicators({
			name: 'triggerDown',
			indent: 520,
			colorStart: 'yellow',
			colorTrigger: 'yellow'
		})
		.addTo(controller);


	});

	// Scene 4 - trigger the right animation on the way UP
	triggersUp.forEach(function(triggerUp, index){

		var triggerTransitionToPrev = new ScrollMagic.Scene({
			triggerElement: triggerUp,
			triggerHook: 0.49
		})
		.on('leave', function(e){

			console.log('crossfade to previous '+triggerUp);

		})
		.addIndicators({
			name: 'triggerUp',
			indent: 110,
			colorStart: 'black',
			colorTrigger: 'black'
		})
		.addTo(controller);


	});

});














