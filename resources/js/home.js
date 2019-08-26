$(document).ready(function() {
	setTimeout(function(){
		set_load('home');
		$('#footer-nav').css('position', 'relative');
	}, 300);
});

var first_load = true;

function load_home(){
}

function setHome(){
	// $('.social-row ul').css('padding-right', '6%');
	if (first_load == true){
		first_load = false;
		if ($(window).width() < 1000){
			$('.social-row').closest('div').removeClass('text-right').addClass('text-center');
		}else{
			$('.social-row').closest('div').removeClass('text-center').addClass('text-right');
		}

		if ( !nav_toggler_shown() ){
			$('#social-row-container').hide();
			$('#footer-nav .social-row').show();
			$('#home-img').height( ($(window).height() - header_nav_height - $('.social-row').outerHeight(true) - $('#footer-nav').height()) * .9 );
		}else{
			$('#social-row-container').show();
			$('#footer-nav .social-row').hide();
			$('#home-img').height( ($(window).height() - header_nav_height - $('.social-row').outerHeight(true)) * .9 );
		}
	}
}

