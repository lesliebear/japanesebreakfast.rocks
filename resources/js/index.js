window.onbeforeunload = function () {
	$('html, body').hide();
	window.scrollTo(0, 0);
}

$('html, body').hide();
var header_nav_height;
var last_clicked;
var first_click = true;

$(document).ready(function() {

	//___SET HEADER NAV HEIGHT______
	set_navs();

	//___SET VIEWS______
	$('html, body').fadeIn(300, 'swing');

	//____CLICK HANDLERS_____
	// $('#brand-header').click(function(e) {
	// 	e.preventDefault();
	// 	if (!nav_toggler_shown()){	
	// 		window.location.href = 'http://japanesebreakfast.rocks';
	// 	}
	// });

	$('#custom-navbar-toggler').click(function(){
		first_click = false;
	});

	$('.navbar-collapse').click(function(){
		if ( first_click == false ){
			$('#custom-navbar-toggler').trigger('click');
		}
	});

	// SET WINDOW RESIZE EVENT HANDLERS
	$(window).resize(function(){
		setTimeout(function(){
			if (nav_toggler_shown()){
				$('#brand-header').css('font-size', '.8em');
				$('.custom-nav').css('padding', '15px');
			}else{
				$('#brand-header').css('font-size', '2em');
				$('.custom-nav').css('padding', '43px');
			}

			// HANDLE NAV TOGGLER
			if ( nav_toggler_shown() ){
				$('#home-btn').show();
				$('#home-btn').removeAttr('hidden');
				$('#header-nav').removeClass('fixed-top');
				$('#header-nav').height('auto');
				if( $('#custom-navbar-toggler').outerHeight(true) > $('#header-nav .container').height() ){
					$('#custom-navbar-toggler').height( $('#header-nav .container').height() );
					$('.navbar-toggler-icon').height( $('#custom-navbar-toggler').height() );
				}
				$('#body-content').css('min-height', ($(window).height() - $('#header-nav').outerHeight()).toString()+'px');
				$('#body-content').css('padding-top', '0');
				$('#footer-nav .navbar-text').css('font-size', '.5em');
			}else{
				$('#home-btn').hide();
				$('#header-nav').addClass('fixed-top');
				$('#body-content').css('min-height', $(window).height().toString()+'px');
				$('#header-nav').height(header_nav_height);
				$('#body-content').css('margin-top', '0');
				$('#body-content').css('padding-top', header_nav_height);
				$('#footer-nav .navbar-text').css('font-size', '.8em');
			}

			if (last_clicked == 'home'){
				setHome();
			}

			if (last_clicked == 'video'){
				setVideo();
			}

			if (last_clicked == 'music'){
				setMusic();
			}

			if (last_clicked == 'shop'){
				setShop();
			}

			if( $(window).height() > $('#body-content .active').height() ){
				$('#body-content').addClass('vertical-center');
			}else{
				$('#body-content').removeClass('vertical-center');
			}
		});
	});
});

function set_load(name){
	$('.nav-item').removeClass('active');
	$(this).addClass('active');

	if ( last_clicked != name ) {
		if ($('#body-content .active').length > 0) {
				$('#body-content .active').fadeOut( 300, 'swing', function() {
					window.scrollTo(0, 0);
					switch_content( name );
				});
		} else {
			switch_content( name );
		}	
	}
	last_clicked = name;
}

function set_navs(){
	// $('#header-nav').height( $(window).height() * .18934911 );
	// header_nav_height = $('#header-nav').height();
	// if ($(window).width() >= 990){
	$('#header-nav').hide();
	if ($(window).width() >= 990){
		$('#header-nav').height( 111 );
		$('#brand-header').css('font-size', '2em');
		$('.custom-nav').css('padding', '43px');
		header_nav_height = 111;
	}else{
		$('#header-nav').height( 58 );
		$('#brand-header').css('font-size', '.8em');
		$('.custom-nav').css('padding', '15px');
		header_nav_height = 58;
	}
	$('#footer-nav').hide();
	$('#footer-nav').height( $(window).height() * .16715976 );
	// $('.custom-nav').css('padding', ($(window).width() * .03868472).toString()+'px' );
	$('.custom-nav').css('padding', '43px' );
}

function switch_content( content_name ) {
	$('#body-content .active').hide();
	$('#body-content .active').removeClass('active');
	$('#' + content_name + '-container').addClass('active');
	$('#' + content_name + '-container').removeAttr('hidden');

	// SHOW BODY
	$('#' + content_name + '-container').hide().fadeIn( 300, 'swing');

	$(window).trigger('resize');
	$('#header-nav').show();
	$('#footer-nav').show();

	switch( content_name ){
		case 'home':
			load_home();
			return
		case 'tour':
			load_tour();
			return
		case 'music':
			load_music();
			return
		case 'video':
			load_video();
			return
		case 'shop':
			load_shop();
			return
		case 'contact':
			load_contact();
			return
	}
}

function nav_toggler_shown(){
	if ( $('#custom-navbar-toggler').is(":visible") ){
		return true;
	} else {
		return false;
	}
}

