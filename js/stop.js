$(document).ready(function (){
    $("#flip1").click(function (){
        $("#panel1").slideDown(5000);
    });

    $("#btn1").click(function (){
        $("#panel1").stop();
    });

    $("#start").click(function (){
        var panel = $("#panel2");
        panel.animate({left: '500px'}, 5000);
        panel.animate({fontSize: '2em'}, 3000);
    });

    // The "stop()" stops the current active animation, but allows the queued animations to be performed afterwards.
    $("#stop").click(function (){
        var panel = $("#panel2");
        panel.stop();
    });

    //The optional "StopAll" true stops the current active animation and clears the animation queue; so all animations on the element is stopped.
    // for details see html file
    $("#stopAll").click(function (){
        var panel = $("#panel2");
        panel.stop(true); // $(selector).stop(stopAll,goToEnd);
    });

    // The optional goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.
    $("#stopButFinish").click(function (){
        var panel = $("#panel2");
        panel.stop(true, true); // $(selector).stop(stopAll,goToEnd);
    });

    $("#flip2").click(function (){
        $("#panel3").slideToggle(5000);
    });

    $("#btn2").click(function (){
        $("#panel3").stop();
    });

});