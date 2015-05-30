/*SMOOTH SCROLLING*/
$(function() {
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
/*TOOLTIP*/
$(function() {
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