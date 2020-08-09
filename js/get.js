$(function (){

    $("#getText").click(function (){
        var text = $("#para").text();
        alert(text);
    });

    $("#getHtml").click(function (){
        var textWithHtml = $("#para").html();
        alert(textWithHtml);
    });

    $("#getVal").click(function (){
        let inputValue = $("#test").val();
        //var inputValue = $("input[name='mouseName']").val();
        //var inputValue = $("#form input[name='mouseName']").val();

        if (inputValue) {
            alert(inputValue);
        } else {
            alert("No value");
        }
    });

    //attr()
    $("#getAttr").click(function (){
        let attrValue = $("#w3s").attr("href");
        //let attrValue = $("#w3s").attr("title");
        //let attrValue = $("#w3s").attr("target");

        alert(attrValue);

    });


});