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
	if ($(window).width() > $(window).height()){
		$('#home-img').height(calculateImageHeight()).css('width', 'auto');
	} else {
		$('#home-img').css('height', 'auto').css('width', '100%');
		if (($('#home-img').height()+$('#header-nav').outerHeight()) > $(window).height()){
			$('#body-content').css('height', 'fit-content');
		}else{
			$('#body-content').height($(window).height() - $('#header-nav').outerHeight());
		}
	}
	// $('#home-img').css('height', ($('#home-container .text-center').width() * 1.63).toString() + 'px' );

	// if ( nav_toggler_shown() && $('#body-content').height()+$('#header-nav').outerHeight() > $(window).height()){
	// if ( nav_toggler_shown() ){
	// 	if ($('#home-img').height() + $('#header-nav').height() > $(window).height()){
	// 		$('#body-content').height('fit-content');
	// 	}else{
	// 		$('#body-content').height( $(window).height() - $('.nav-sm').outerHeight() );
	// 	}
	// 	// $('#body-content').css('min-height', 'fit-content').height( $(window).height() - $('.nav-sm').outerHeight() );
	// }else{
	// 	$('#body-content').height( ($(window).height() - $('.nav-lg').outerHeight() - $('#footer-nav').outerHeight()) );
	// }
}

function calculateImageHeight(){
	return ($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight()) * .95;
}
