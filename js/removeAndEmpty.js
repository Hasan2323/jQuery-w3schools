$(function () {

    $("#btn1").click(function () {
        $(".div1").remove();
    });

    $("#btn2").click(function () {
        $(".div1").empty();
    });

    // TODO: The following example removes all <p> elements with class="test":
    $("#btn3").click(function () {
        $("p").remove(".test");
        //$("p.test").remove(); // 3 tai same
        $("p.test").empty();
    });

    //TODO: This example removes all <p> elements with class="test" and class="demo":
    $("#btn4").click(function () {
        $("p").remove(".test, .demo");
        //$("p.test, p.demo").remove(); // 3 tai same
        //$("p.test, p.demo").empty();
    });

});