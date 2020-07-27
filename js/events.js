$(document).ready(function () {

//TODO: double click Event
    $("#dblClick").dblclick(function () {
        $("p.dblClick").hide();
    });

//TODO: mouseenter() event
    $("#mouseEnter").mouseenter(function () {
        alert("Mouse enters!")
    });

//TODO: mouseleave() event
    $("#mouseLeave").mouseleave(function () {
        alert("Mouse leaves!")
    });

//TODO: mousedown() event
    $("#mouseDown").mousedown(function () {
        alert("Mouse down");
    });

//TODO: mouseup() event
    $("#mouseUp").mouseup(function () {
        alert("Mouse up");
    });

//TODO: mousehover() event (consists two events)
    $("#mouseHover").hover(function () {
        $(this).css("font-size", "30px");
    },
    function () {
        $(this).css("font-size", "10px");
    });

//TODO: focus() and blur() event on form
    $("input").focus(function () {  //The function is executed when the form field gets focus
        $(this).css("background-color", "gray");
    });
    $("input").blur(function () { // The function is executed when the form field loses focus:
        $(this).css("background-color", "red");
    });


// TODO: The on() Method
// TODO: The on() method attaches one or more event handlers for the selected elements.
    //on() Signle
    $("#onSingle").on("click", function () {
        $(this).hide();
    });

    //on() multiple
    $("#onMultiple").on({
        mouseenter: function () {
            $(this).css("background-color", "gray");
        },
        click: function () {
            $(this).css("background-color", "red");
        },
        mouseleave: function () {
            $(this).css("background-color", "yellow");
        }
    });


});