$(document).ready(function(){
    $("#btn1").click(function(){
        $("#div1 input").focus();
        var namVal = $("#div1 input[name=nam]").val();
        console.log(namVal);
        if(namVal === '') {
            $("p.text").html("Input can't be empty");
        }
        else {
            $("p.text").html("Input gets focus and It has value");
        }
    });
    $("#btn2").click(function(){
        $("#div1 input").blur();
        $("p.text").html("Input loses focus");
    });

    // another example
    $("#div2 input").focus(function () {  //The function is executed when the form field gets focus
        $(this).css("background-color", "gray");
    });
    $("#div2 input").blur(function () { // The function is executed when the form field loses focus:
        $(this).css("background-color", "red");
    });



});