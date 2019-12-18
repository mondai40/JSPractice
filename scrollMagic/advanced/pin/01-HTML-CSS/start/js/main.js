$(document).ready(function(){

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Scene 1 - pin the second section
    var pinScene01 = new ScrollMagic.Scene({
        triggerElement: "#slide01",
        triggerHook: 0,
        duration: "100%"
    })
    .setPin("#slide01 .pin-wrapper")
    .addTo(controller);

    //Scene2 - pin the therd section
    var pinScene02 = new ScrollMagic.Scene({
        triggerElement: "#slide01",
        triggerHook: 0,
        duration: "200%"
    })
    .setPin("#slide02 .pin-wrapper")
    .addTo(controller);

    var pinScene03 = new ScrollMagic.Scene({
        triggerElement: "#slide01",
        triggerHook: 0,
        duration: "300%"
    })
    .setPin("#slide03 .pin-wrapper")
    .addTo(controller);
});
