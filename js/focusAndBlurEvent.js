$(document).ready(function(){
    $("#btn1").click(function(){
        $("input").focus();
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
        $("input").blur();
        $("p.text").html("Input loses focus");
    });



});