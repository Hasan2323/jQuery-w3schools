$(document).ready(function () {

    /*
    * $(selector).hide(speed,callback);
    * The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.
       The optional callback parameter is a function to be executed after the hide() or show() method completes
    *
    * */

    $("#hide").click(function () {
        //$("p").hide("fast");
        $("p.hideAndShow").hide("fast");
    });

    $("#show").click(function () {
        $("p.hideAndShow").show(2000);
        //$("p").show(2000);
    });


    $(".ex .addressBtn").click(function () {
        $(this).parents(".ex").hide("slow");
    });

//TODO: Toggle() example
    $(".ex1 .addressBtn").click(function () {
        $(".ex1 p").toggle(2000);
    });
    $(".ex2 .addressBtn").click(function () {
        $(".ex2 p").toggle("slow");
    });
});