var img = new Image();

$(document).ready(function() {
	setBodyContentHeight();
	$(window).resize(function(){
		setBodyContentHeight();
	});

	img.src = "../images/michelle-jubilee.png";
	img.id = "home-img";
	img.alt = "Michelle Jubilee";
	img.onload = function () {
	   $('#home-container').append(img);
		 $('#home-img').fadeIn();
	}
});

function setBodyContentHeight(){
	if ($(window).width() > 425){
		$('#body-content').height($(window).height() - $('#header-nav').outerHeight(true) - $('#footer-nav').outerHeight(true));
	} else {
		$('#body-content').height($(window).height() - $('.nav-sm').outerHeight(true) - $('#footer-nav').outerHeight(true) + $('#credits').outerHeight(true));
	}
}
