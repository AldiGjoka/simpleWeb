var fuciVogel = 0;
var fuciMadhe = 0;
var rezultati = 0;

$(".buton").click(function() {
    fuciVogel = $("#vogla").val();
    fuciMadhe = $("#medha").val();
    rezultati = ((fuciVogel * 30) + (fuciMadhe * 50))/100;
    console.log(rezultati);
    $("#vlera").text(rezultati);
})