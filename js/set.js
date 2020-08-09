$(function () {

    $("#setText").click(function () {
        //$("#para").text("<b>Simple</b> paragraph");
        $("#para").text("Simple paragraph");
    });

    $("#setHtml").click(function () {
        $("#para").html("<i>Italic</i> Paragraph");
    });

    $("#setVal").click(function () {
        $("#test").val("Tom and Jerry");
        //$("input[name='mouseName']").val("Tom & Jerry");
        //$("#form input[name='mouseName']").val("Tom n Jerry");

    });

    //attr()
    $("#setAttr").click(function () {
        //$("#w3s").attr("href", "https://www.fb.com");
        //$("#w3s").attr("title", "Facebook");
        //$("#w3s").attr("target", "_self");
        //$("#w3s").text("Facebook Inc.").attr("href", "https://www.fb.com");

        // TODO: multiple attributes change
        //$("#w3s").text("Facebook Inc.").attr("title", "Facebook").attr("href", "https://www.fb.com");
        // $("#w3s").text("Facebook Inc.").attr({
        //     "title": "Facebook",
        //     "href": "https://www.fb.com" // syntax is different here. use colon(:) not comma.
        // });

        $("#w3s").attr({
            "title" : "Facebook",
            "href" : "https://www.fb.com" // syntax is different here. use colon(:) not comma.
        });


    });


});