$(document).ready(function() {
	setTimeout(function(){
		setBodyContentHeight();
		$('#home-img').fadeIn();

		$(window).resize(function(){
			setBodyContentHeight();
		});
	}, 300);
});

function setBodyContentHeight(){
	if ($(window).width() > 425){
		$('#body-content').height($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight());
	} else {
		$('#newsletter-socials-row').css('margin-bottom', '5%');	
		$('#body-content').height($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight() + $('#credits').outerHeight());
	}

	// if ($(window).width() <= 991){
	// 	$('#body-content').height($(window).height() - $('#header-nav').outerHeight());
	// } else {
	// 	$('#body-content').height($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight());
	// }
	// setHomeImageHeight();
}

// function setHomeImageHeight(){
// 	if ($(window).width() > 425 || $(window).width() > $(window).height()){
// 		$('#home-img').height(calculateImageHeight()).css('width', 'auto');
// 	} else {
// 		$('#home-img').css('height', 'auto').css('width', '80%');
// 	}
// }

// function calculateImageHeight(){
// 	return ($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight()) * .95;
// }
