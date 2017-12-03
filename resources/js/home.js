$(document).ready(function() {
	setTimeout(function(){
		set_load('home');
	}, 300);
});

var social_icon_class = 'fa-lg';
var first_load = true;

function load_home(){
}

function setHome(){
	if (first_load == true){
		first_load = false;
		if ($(window).width() < 1000){
			$('#social-row').closest('div').removeClass('text-right').addClass('text-center');
		}else{
			$('#social-row').closest('div').removeClass('text-center').addClass('text-right');
		}

		if ($(window).width() > 1500){
			if ($(window).width() > 2000){
				setSocial('fa-3x');
			}else{
				setSocial('fa-2x');
			}
		}else{
			if ($(window).width() < 670){
				setSocial('');
			}else{
				setSocial('fa-lg');
			}
		}

		if ($(window).height() > 470){
			$('#home-img').height( ($(window).height() - header_nav_height - $('#social-row').outerHeight(true)) * .9 );
		}
	}
}

function setSocial( new_class ){
	$('.fa-stack').each(function(){
		$(this).removeClass(social_icon_class).addClass(new_class);
	});
	social_icon_class = new_class;
}