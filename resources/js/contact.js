$(document).ready(function() {
  setTimeout(function(){
    setContactContent();

		$(window).resize(function(){
			setContactContent();
		});
	}, 300);

});

function setContactContent(){
  let desktop_content_space = $(window).height() - $('.nav-lg').outerHeight(true) - $('#footer-nav').outerHeight(true);
  let mobile_content_space = $(window).height() - $('.nav-sm').outerHeight(true);

  if ( nav_toggler_shown() ){
    console.log(mobile_content_space);
    $('#contact-container').height(mobile_content_space);
	}else{
    $('#contact-container').height(desktop_content_space);
	}
}
