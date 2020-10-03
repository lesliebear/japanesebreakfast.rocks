var social_icon_class = 'fa-lg';

$(document).ready(function() {

	// SET WINDOW RESIZE EVENT HANDLERS
	setWindow();

	$(window).resize(function(){
		setWindow();
	});

});


function setWindow(){
	setTimeout(function(){
		if ($(window).width() < 670){
			setSocial('');
		}else{
			setSocial('fa-sm');
		}

		setMailingList();
	}, 300);
}

function setMailingList(){
	var leftMargin;
	if ($(window).width() > 1250){
		$('#email-content').css('justify-content', 'flex-start');
		leftMargin = $('#email-content').width()/2 - $('#email-content p').width()/2 - $('#footer-logo').width();
		$('#email-content p').css('margin-left', leftMargin);
		leftMargin = $('#email-content').width() -$('#footer-logo').width() - $('#email-content p').outerWidth(true) - $('#email-content .field').width()-5;
		$('#email-content .field').css('margin-left', leftMargin);
	} else {
		$('#email-content p').css('margin-left', '0');
		$('#email-content .field').css('margin-left', '0');
		$('#email-content').css('justify-content', 'space-between');
	}
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
