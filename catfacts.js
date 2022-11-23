$(document).ready(function() {


    getCatFact();
    setInterval(getCatFact, 15000);

    function getCatFact() {
        $.get("https://catfact.ninja/fact", function(data, status) {
            $("#catFactText").html(data.fact);
        });
    }
});