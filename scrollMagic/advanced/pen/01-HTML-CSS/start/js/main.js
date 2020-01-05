$(document).ready(function(){

    //move the pen body up to connect with the first pen
    TweenMax.set(".part3", {y: -572});

    //hide all headings and text
    // TweenMax.set([".parts h2", ".parts p"], {autoAlpha: 0});

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
    .addTo(controller);

    //move 4 and 5 down, to connect with part 6
    // TweenMax.set(".part4", {y: 289});
    // TweenMax.set(".part5", {y: 120});

    //move part 6 to connect with the body
    TweenMax.set(".part6", {y: -846});

    //move 4 and 5 down, to connect with part 6
    TweenMax.set(".part5", {y: -726}); /*120-846*/
    TweenMax.set(".part4", {y: -557}); /*289-846*/
    
    var p6ToStart = new TweenMax.to(".part6", 1, {y: 0, ease: Linear.easeNone});
    var p6ToStartScene = new ScrollMagic.Scene({
        triggerElement: ".part1",
        triggerHook: 1,
        duration: 846,
        offset: 1250
    })
    .setTween(p6ToStart)
    .addTo(controller);

    var p5ToStart = new TweenMax.to(".part5", 1, {y: 0, ease: Linear.easeNone});
    var p5ToStartScene = new ScrollMagic.Scene({
        triggerElement: ".part1",
        triggerHook: 1,
        duration: 726,
        offset: 1250
    })
    .setTween(p5ToStart)
    .addTo(controller);

    var p4ToStart = new TweenMax.to(".part4", 1, {y: 0, ease: Linear.easeNone});
    var p4ToStartScene = new ScrollMagic.Scene({
        triggerElement: ".part1",
        triggerHook: 1,
        duration: 557,
        offset: 1250
    })
    .setTween(p4ToStart)
    .addTo(controller);

    $(".parts li").each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.55
        })
        .setClassToggle(this, "fade-in")
        .addTo(controller);
    });
});
