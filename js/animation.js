$(document).ready(function (){
    $("#btn1").click(function (){
        $("#content1").animate({left: '570px'}, "slow");
    });

    // Is it possible to manipulate ALL CSS properties with the animate() method?
    //
    // Yes, almost! However, there is one important thing to remember: all property names must be camel-cased
    // when used with the animate() method: You will need to write paddingLeft instead of padding-left,
    // marginRight instead of margin-right, and so on.
    //
    // Also, color animation is not included in the core jQuery library.
    // If you want to animate color, you need to download the Color Animations plugin from https://plugins.jquery.com/

    $("#btn2").click(function (){
        $("#content2").animate({
            left: '440px',
            opacity: '0.3',
            height: '200px',
            width: '200px',
            fontSize: '50px'
        }, 1500);
    });

    $("#btn3").click(function (){
        var mts = $("#content3");  // mts = multiple task separately
        mts.animate({left: "498px"},2000);
        mts.animate({height: "200px"}, 2000);
        mts.animate({fontSize: "3em"}, 2000);
    });
});