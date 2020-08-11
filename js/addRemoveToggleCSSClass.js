$(function () {

    $("#btn1").click(function () {
        $("h1, p").addClass("blue"); // no need to put . (dot).
        $(".imp").addClass("important red"); // multiple class.
    });

    $("#btn2").click(function () {
        $("h1, p").removeClass("blue");
        $(".imp").removeClass("important red");
    });

    $("#btn3").click(function () {
        $("h1, p").toggleClass("blue");
        $(".imp").toggleClass("important red");
    });
});
