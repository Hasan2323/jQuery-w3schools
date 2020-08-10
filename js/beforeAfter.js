$(function (){

    $("#btn1").click(function (){
        $("img").before("<b>Before </b>");
    });

    $("#btn2").click(function (){
        $("img").after("<strong> After</strong>");
    });

});

function afterText() {
    var txt1 = "<b> I</b>";
    var txt2 = $("<i></i>").text(" love");
    var txt3 = document.createElement("u");
    txt3.innerHTML = " jQuery";

    $("img").after(txt1, txt2, txt3);

}