$(document).ready(function (){

    //$(selector).fadeIn(speed,callback);
    $("#fadeInBtn").click(function (){
        $("#fadeInDiv").fadeIn(2000);
    });

    //$(selector).fadeOut(speed,callback);
    $("#fadeOutBtn").click(function (){
        $("#fadeOutDiv").fadeOut(2000);
    });

    //TODO: $(selector).fadeToggle(speed,callback);
    $("#fadeInOutBtn").click(function (){
        $("#fadeInOutDiv").fadeToggle(1500);
    });

    //TODO: $(selector).fadeTo(speed,opacity,callback);
    $("#fadeToBtn").click(function (){
        $("#fadeToDiv1").fadeTo("slow", 0.15);
        $("#fadeToDiv2").fadeTo("slow", 0.5);
        $("#fadeToDiv3").fadeTo("slow", 0.8);
    });
});