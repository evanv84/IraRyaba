jQuery(document).ready(function($) {
	
	$(window).scroll(function () {
	    /*var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	        //Scrolling Down
	        $('nav').removeClass('affix');
	    } else {
	       //Scrolling Up
	       $('nav').addClass('affix');  
	    } */

	    if ($(window).scrollTop()<=0) {
	      $('#nav').css('top', '-80px');
	    } 

	    if ($(window).scrollTop()>=800) {
	      $('#nav').css('top', '0');
	    }
	});

	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});


	$("a.gallery-img").fancybox({
		titleShow: true
	});

});