/*MENU*/
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
/*SMOOTH SCROLLING*/
$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
/*FANCYBOX*/
$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});
/*TOOLTIP*/
$(document).ready(function() {
	$( document ).tooltip({
	  position: {
	    my: "center bottom-10",
	    at: "center top",
	    using: function( position, feedback ) {
	      $( this ).css( position );
	      $( "<div>" )
	        .addClass( "arrow" )
	        .addClass( feedback.vertical )
	        .addClass( feedback.horizontal )
	        .appendTo( this );
	    }
	  }
	});
});