$(document).ready(function (){
    $("#btn1").click(function (){
        $("#content1").slideDown("slow");
    });

    $("#btn2").click(function (){
        $("#content2").slideUp("slow");
    });

    $("#btn3").click(function (){
        $("#content3").slideToggle("slow");
    });
});