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
}

function calculateImageHeight(){
	return ($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight()) * .95;
}
