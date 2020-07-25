$(document).ready(function () {

//TODO: Selects the first <p> element
    $("#firstBtn").click(function () {
        $("p:first").hide();
        //$("p:last").hide();
    });

//TODO: The Element Selector

    // $("p").click(function () {
    //     $(this).hide();
    // });

//TODO: The Class Selector

    $(".firstPara").click(function () {
        $(this).hide();  // 'this' dile nije hide hoye jabe
    });

//TODO: The ID(unique one) Selector

    $("#secondParaBtn").click(function () {
        $("#secondPara").hide()  // ekhane button a click korle p tags gula hide hoye jabe.
    });

//TODO: All selector
    $("#allGoneBtn").click(function () {
        $("*").hide();
    });

//TODO: class-wise tag selector
    $("#classAndTag").click(function () {
        $("p.classAndTag").hide();
    });

//TODO: Selectors for list
    $("#listBtn1").click(function () {
        //$("ul li:first").hide();
        //$("ul:last li:first").hide();

        // TODO: Same ai 2 ta
        $("ul li:first-child").hide();         //coffee will hide from all list
        //$("ul li:nth-last-child(3)").hide(); //coffee will hide from all list


        //$("ul li:nth-last-child(1)").hide(); //tea will hide from all list
        //$("ul li:nth-last-child(2)").hide(); //milk will hide from all list
        //$("ul:first li:nth-last-child(2)").hide(); //milk will hide from first list

    });

//TODO: href vanish
    $("#hrefBtn").click(function () {
        $("[href]").hide();
    });

//TODO: a target attribute value equal/not equal to "_blank"
    $("#hrefValueBtn").click(function () {
        //$("a[target='_blank']").hide();
        $("a[target!='_blank']").hide();
    });

//TODO: Table tr odd/even
    $("#tableOddEven").click(function () {
        //$("tr:odd").hide();
        //$("tr:even").hide();

        //$("tr td:odd").hide();
        //$("tr td:even").hide();

        $("tr:odd").css("background-color", "red");
        $("tr:even").css("font-size", "30px");
    });

});