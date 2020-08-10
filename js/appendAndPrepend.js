$(function (){

    $("#addText").click(function (){

        $("#para1").prepend("<b>Boy 1 : </b>").append(" <b>Hasan</b>");
        $("#para2").prepend("<b>Boy 2 : </b>").append(" <b>Saimon</b>");

        $(this).hide("slow", function (){
            alert("Done! you can do it only once.")
        });

        // $("#para1").prepend("<b>Boy 1 : </b>");
        // $("#para2").prepend("<b>Boy 2 : </b>");
    });

    let i = 7;
    $("#addList1").click(function (){
        i++;
        $("ol").append("<li>List item " + i + "</li>");
    });

    let j = 5;
    $("#addList2").click(function (){
        j--;
        $("ol").prepend("<li>List item " + j + "</li>");
        if (j === 1) {
            $(this).hide("slow", function (){
                alert("reached at 1. Can't prepend more.")
            });
        }
    });

});

/*
* Add Several New Elements With append() and prepend()
In both examples above, we have only inserted some text/HTML at the beginning/end of the selected HTML elements.

However, both the append() and prepend() methods can take an infinite number of new elements as parameters.
The new elements can be generated with text/HTML (like we have done in the examples above), with jQuery, or with JavaScript code and DOM elements.
* */

function appendText() {
    var text1 = "<b>Muhammad</b>";                            // Create element with HTML
    var text2 = $("<i></i>").text(" Abid Hasan");             // Create with jQuery
    var text3 = document.createElement("strong");    // Create with DOM
    text3.innerHTML = " Saimon";

    $("#multipleAppend").append(text1, text2, text3);
}

function prependText() {
    var txt1 = "<b>Muhammad</b>";
    var txt2 = $("<i></i>").text(" Abid");
    var txt3 = document.createElement("i");
    txt3.innerHTML = " Hasan";

    $("#multiplePrepend").prepend(txt1, txt2, txt3);
}
