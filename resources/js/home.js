$(document).ready(function() {
	setTimeout(function(){
		setHomeImage();
		$('#home-img').fadeIn();

		$(window).resize(function(){
			setHomeImage();
		});
	}, 300);
});

function setHomeImage(){
	if ( nav_toggler_shown() ){
		$('#body-content').height( $(window).height() - $('.nav-sm').outerHeight() );
	}else{
		$('#body-content').height( ($(window).height() - $('.nav-lg').outerHeight() - $('#footer-nav').outerHeight()) );
	}

	$('#home-img').css('max-height', ($('#home-container .text-center').width() * 1.63).toString() + 'px' );
}
