$(document).ready(function(){

    //move the pen body up to connect with the first pen
    TweenMax.set(".part3", {y: -572});

    //hide all headings and text
    TweenMax.set([".parts h2", ".parts p"], {autoAlpha: 0});

    //create a tween that will move the pen body back to its original css position
    var bodyToStart = TweenMax.to(".part3", 1, {y: 0, ease: Linear.easeNone});

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Create a Scene 1

    var bodyToStartScene = new ScrollMagic.Scene({
        triggerElement: ".part1",
        triggerHook: 1,
        offset: 287,
        duration: 572
    })
    .setTween(bodyToStart)
    .addIndicators()
    .addTo(controller);

    //move 4 and 5 down, to connect with part 6
    TweenMax.set(".part4", {y: 289});
    TweenMax.set(".part5", {y: 120});

    //move part 6 to connect with the body
    TweenMax.set(".part6", {y: -846});

    //move 4 and 5 down, to connect with part 6
    TweenMax.set(".part4", {y: -557}); /*289-846*/
    TweenMax.set(".part5", {y: -726}); /*120-846*/




});
