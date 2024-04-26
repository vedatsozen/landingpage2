$(document).ready(function() {

    $(".homelink").click(() => {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });

    $(".learnlink").click(() => {
        $('html, body').animate({
            scrollTop: $("#learn").offset().top 
        }, 500);
    });

    $(".contactlink").click(() => {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });

})