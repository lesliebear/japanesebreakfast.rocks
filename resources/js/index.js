var social_icon_class = 'fa-lg';

$(document).ready(function() {
	setTimeout(function(){
		$('#footer-nav').css('visibility', 'visible');
		visibilityFadeIn($('#body-content'));
		$('#sign-up-btn').mouseenter(function(){
			doBounce($('#newsletter-logo img'), 3, '10px', 100);
		});
	}, 500);

	// SET WINDOW RESIZE EVENT HANDLERS
	setWindow();

	$(window).resize(function(){
		setWindow();
	});

});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }
}

function setWindow(){
	setTimeout(function(){
		if ($(window).width() < 670){
			setSocial('');
		}else{
			setSocial('fa-sm');
		}
	}, 300);
}

function setSocial( new_class ){
	$('.fa-stack').each(function(){
		$(this).removeClass(social_icon_class).addClass(new_class);
	});
	social_icon_class = new_class;
}

function nav_toggler_shown(){
	if ($(window).width() <= 991) {
		return true;
	} else {
		return false;
	}
}

function visibilityFadeIn(target){
	target.css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0});
}
