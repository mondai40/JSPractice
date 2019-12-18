$(document).ready(function(){

	// move the pen body up to connect with the first part
	TweenMax.set('.part3', {y: -572});

	// hide all headings and text
	TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

	// create a tween that will move the pen body back to its original css position
	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone});

	// Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	// Create a Scene 1 - move pen body back to start - HOW?
	var bodyToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 287,
		duration: 572
	})
	.setTween(bodyToStart)
	.addIndicators()
	.addTo(controller);

	// move 4 and 5 down, to connect with part 6 - HOW?
	// TweenMax.set('.part5', {y: 120});
	// TweenMax.set('.part4', {y: 289});

	// move part 6 to connect with the body
	TweenMax.set('.part6', {y: -846});

	// move 4 and 5 to connect with part 6 again
	TweenMax.set('.part5', {y: -726}); /* 120 - 846 */
	TweenMax.set('.part4', {y: -557}); /* 289 - 846 */

	// Create scene for part 6 - move part 6 back to start
	var p6ToStart = new TweenMax.to('.part6', 1, {y:0, ease:Linear.easeNone});

	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 846,
		offset: 1250
	})
	.setTween(p6ToStart)
	.addIndicators()
	.addTo(controller);

});





















