$(function () {

    $("#setText").click(function () {
        $("#para1").text(function (index, oldText){
            return "text: " + oldText + " index " + index
        });
    });

    $("#setHtml").click(function () {
        $("#para2").html(function (index, oldHtml){
            return "HTML: " + oldHtml + index
        });
    });


    //attr()
    $("#setAttr").click(function () {
        $("#w3s").attr("href", function (index, oldHref){
            return oldHref + "/jquery/";
        });
    });


});