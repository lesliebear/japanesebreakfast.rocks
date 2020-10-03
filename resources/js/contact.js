$(document).ready(function() {
  setTimeout(function(){
    setContactContent();

		$(window).resize(function(){
			setContactContent();
		});
	}, 300);
});

function setContactContent(){
  if ( nav_toggler_shown() ){
    $('#body-content').css('height', 'auto');
	}else{
		$('#body-content').height( ($(window).height() - $('.nav-lg').outerHeight() - $('#footer-nav').outerHeight()) );
	}
}
