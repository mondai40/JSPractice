$(document).ready(function(){

    const controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: "#project01"
    })
    .setClassToggle("#project01", "fade-in")
    .addIndicators({
        name: "fade scene",
        colorTrigger: "red",
        indent: 100,
        colorStart: "purple",
    })
    .addTo(controller);

});


















