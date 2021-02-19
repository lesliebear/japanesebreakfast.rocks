$(document).ready(function() {
  setTimeout(function(){
    setContactContent();

		$(window).resize(function(){
			setContactContent();
		});
	}, 300);

});

function setContactContent(){
  let desktop_content_space = $(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight();
  let mobile_content_space = $(window).height() - $('#header-nav').outerHeight();

  if ( nav_toggler_shown() ){
    $('#contact-container').height(mobile_content_space);
	}else{
    $('#contact-container').height(desktop_content_space);
	}
}
