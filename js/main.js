//MENU
$(document).ready(function() {

    $("ul#navbar span").css("opacity","0");

    $("#info_link").hover(function () {
        $("#info_span").stop().animate({
                opacity: 1
        }, "slow");
    },
    function () {
        $("#info_span").stop().animate({
                opacity: 0
        }, "slow");
    });

    $("#inscricoes_link").hover(function () {
        $("#inscricoes_span").stop().animate({
                opacity: 1
        }, "slow");
    },
    function () {
        $("#inscricoes_span").stop().animate({
                opacity: 0
        }, "slow");
    });

    $("#edicoes_link").hover(function () {
        $("#edicoes_span").stop().animate({
                opacity: 1
        }, "slow");
    },
    function () {
        $("#edicoes_span").stop().animate({
                opacity: 0
        }, "slow");
    });

    $("#contacto_link").hover(function () {
        $("#contacto_span").stop().animate({
                opacity: 1
        }, "slow");
    },
    function () {
        $("#contacto_span").stop().animate({
                opacity: 0
        }, "slow");
    });

    $("#ranking_link").hover(function () {
        $("#ranking_span").stop().animate({
                opacity: 1
        }, "slow");
    },
    function () {
        $("#ranking_span").stop().animate({
                opacity: 0
        }, "slow");
    });
    
/*    
    $("ranking_link").hover(function () {
        $("#drop_years").style.display = "block".stop().animate({
                opacity: 1
        }, "slow");
        },
    function () {
        $("#drop_years").style.display = "none".stop().animate({
                opacity: 0
        }, "slow");
        });
*/
});