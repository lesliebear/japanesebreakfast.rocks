window.onbeforeunload = function () {
	$('html, body').hide();
	window.scrollTo(0, 0);
}

//____POPULATE TOUR SECTION_______
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://rest.bandsintown.com/artists/japanesebreakfast/events?app_id=japanesebreakfastofficialsite", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
    	var response = JSON.parse(xhr.responseText);
		for(i=0; i<response.length; i++){
			var event = create_event_row(response[i]);
			$('#tour-container').append(event);
		}
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
$('#tour-container').find('.row').last().find('.evt').css('border-bottom', 'none');

$('html, body').hide();
var header_nav_height;
var last_clicked;
var social_icon_class = 'fa-lg';
var play_icon_class = 'fa-3x';
var first_click = true;

$(document).ready(function() {

	//___SET HEADER NAV HEIGHT______
	set_navs();

	//___SET VIEWS______
	$('html, body').fadeIn(300, 'swing');

	//____TRIGGER HOME PAGE________
	setTimeout(function(){
		$('#home-btn').trigger('click');
	}, 300);

	//____CLICK HANDLERS_____
	$('#brand-header').click(function(e) {
		e.preventDefault();
		if (!nav_toggler_shown()){	
			$('#home-btn').trigger('click');
		}
	});

	$('#custom-navbar-toggler').click(function(){
		first_click = false;
	});

	$('.navbar-collapse').click(function(){
		if ( first_click == false ){
			$('#custom-navbar-toggler').trigger('click');
		}
	});

	$('.nav-item').click( function(e) {
		e.preventDefault();

		$('.nav-item').removeClass('active');
		$(this).addClass('active');

		var name = $(this).attr('data-name');
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
	});

	$('.overlay').click(function() {
		var width = $(this).width();
		var height = (width * 9) / 16;
		var vid_id;
		switch($(this).find('img').attr('id')){
			case 'machinist-img':
				vid_id = 'wujw-FH2Itw';
				break;
			case 'everybody-img':
				vid_id = 'KNT7wuqaykc';
				break;
			case 'jane-img':
				vid_id = 'zqa-v9A3Ecw';
				break;
			case 'heaven-img':
				vid_id = 'hOsLEKnbl7I';
				break;
		}

		/* AUTOPLAY ( doesn't count towards views )
		$(this).replaceWith('<div class="video-wrapper"><iframe id="player" class="player" src="https://www.youtube.com/embed/'+vid_id+'?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
		*/
		$(this).replaceWith('<div class="video-wrapper"><iframe id="player" class="player" " src="https://www.youtube.com/embed/'+vid_id+'?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>');
		$('.video-wrapper').width(width);
		$('.video-wrapper').height(height);
		$('.player').width('100%');
		$('.player').height('100%');
	});

	// SET WINDOW RESIZE EVENT HANDLERS
	$(window).resize(function(){
		setTimeout(function(){
			if ($(window).width() < 615) {
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
				$('#body-content').css('min-height', ($(window).height() - $('#header-nav').outerHeight()).toString()+'px');
				if( $('#custom-navbar-toggler').outerHeight(true) > $('#header-nav .container').height() ){
					$('#custom-navbar-toggler').height( $('#header-nav .container').height() );
					$('.navbar-toggler-icon').height( $('#custom-navbar-toggler').height() );
				}
				$('#body-content').css('padding-top', '0');
				$('#footer-nav .navbar-text').css('font-size', '.5em');
			}else{
				$('#home-btn').hide();
				$('#header-nav').addClass('fixed-top');
				$('#body-content').css('min-height', $(window).height().toString()+'px');
				// set_navs();
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

function set_navs(){
	// $('#header-nav').height( $(window).height() * .18934911 );
	// header_nav_height = $('#header-nav').height();
	$('#header-nav').height( 111 );
	header_nav_height = $('#header-nav').height();
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

//_____HOME
function load_home(){
}

function setHome(){
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

	if ($(window).height() > 500){
		$('#home-img').height( ($(window).height() - header_nav_height - $('#social-row').outerHeight(true)) * .9 );
	}
}

function setSocial( new_class ){
	$('.fa-stack').each(function(){
		$(this).removeClass(social_icon_class).addClass(new_class);
	});
	social_icon_class = new_class;
}

//_____TOUR
function load_tour(){
	$('#body-content').removeClass('text-center');
}

function create_event_row( event ){
	var parsed_datetime = event.datetime.split('-');
	var year = parsed_datetime[0];
	var month_num = parsed_datetime[1];
	var month = monthToString(parsed_datetime[1]);
	var day = parsed_datetime[2].split('T')[0];
	var date = month + ' ' + day;
	var weekday = getWeekDay(parseInt(year), parseInt(month_num)-1, parseInt(day));
	var name = event.venue.name;
	var city = event.venue.city;
	var region = event.venue.region;
	var country = event.venue.country;
	var rsvplink = event.url;

	var location;
	if (country == "United States"){
		location = city + ", " + region;
	} else {
		location = city + ", " + country;
	}

	var offer;
	var offerlink;
	if (event.offers[0] != undefined && event.offers[0].status == "available") {
		offer = event.offers[0].type; 
		offerlink = event.offers[0].url;
	}

	var time = 	'<div class="time">'
				+'<div class="evt event-date">'+date+'</div>'
				+'<div class="evt event-weekday">'+weekday+'</div>'
				+'</div>';

	var venue_name = 	'<div class="venue_name">'
						+'<div class="evt event-name">'+name+'</div>'
						+'</div>';

	var venue_location = 	'<div class="venue_location">'
							+'<div class="evt event-location">'+location+'</div>'
							+'</div>';

	var links = '<div class="evt event-links"><a href="'+rsvplink+'" target="_blank" class="custom-btn">RSVP</a>';

	if (offer == undefined || offer.toLowerCase() == 'sold out'){
		var offer_text;
		if (offer != undefined){
			offer_text = 'sold out';
		}else{
			offer_text = 'tickets';
		}
		links += '<a class="custom-btn empty">'+offer_text.toUpperCase()+'</a></div>';
	}else{
		links += '<a href="'+offerlink+'" target="_blank" class="custom-btn">'+offer.toUpperCase()+'</a></div>';
	}

	var append_string = '<div class="row">'
						+ time
						+ venue_name
						+ venue_location
						+ links
						+'</div>';
	return append_string
}

function monthToString( num ) {
	switch(num) {
		case '01':
			return 'JAN'
		case '02':
			return 'FEB'
		case '03':
			return 'MAR'
		case '04':
			return 'APR'
		case '05':
			return 'MAY'
		case '06':
			return 'JUN'
		case '07':
			return 'JUL'
		case '08':
			return 'AUG'
		case '09':
			return 'SEP'
		case '10':
			return 'OCT'
		case '11':
			return 'NOV'
		case '12':
			return 'DEC'
	}
}

function getWeekDay( year, month, day) {
	var date = new Date( year, month, day);
	var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

	return days[date.getDay()]
}

//_____MUSIC
function load_music(){

}

function setMusic(){
	if( $(window).width() < 750 ){
		if ( $('.spotify-wrapper iframe').height() > 100){
			$('#ssfap-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A7HXfMFsrVmUQqjhBuLsZtY" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
			$('#psychopomp-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A3i7EHinpu9J5MXKMzjpjZ0&theme=white&view=coverart" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
		}
	}else{
		if ( $('.spotify-wrapper iframe').first().height() < 100 ){
			$('#ssfap-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify:track:7HXfMFsrVmUQqjhBuLsZtY" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
			$('#psychopomp-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A3i7EHinpu9J5MXKMzjpjZ0&theme=white" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');			
		}
	}
}

//_____VIDEO
function load_video(){
	//_____GET YOUTUBE PLAYER_______
	var tag = document.createElement('script');
	tag.id = 'iframe-demo';
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	//_____SET VIDEOS_______
	var img = $('.overlay').first().find('img').first();
	var img_height = img.height();
	var img_width = img.width();
	var body_height = $(window).height() - 100;
	var multiply = 16 / 9;
	if (img_height > body_height) {
		$('#video-container').width( body_height * multiply );
	}
}

function setVideo(){
	set_video_overlay();
	var vid_width = $('#video-container').width();
	$('.video-wrapper').width( vid_width );
	$('.video-wrapper').height( (vid_width * 9) / 16 );
	if (nav_toggler_shown()){
		$('.video .info').show();
		$('.video .info').css('background-color', 'rgba(0,0,0,0)');
		if( $(window).width() < 500){
			$('.fa-play').each(function(){
				$(this).removeClass(play_icon_class).addClass('');
			});
			play_icon_class = 'fa-2x';
		}else{
			$('.fa-play').each(function(){
				$(this).removeClass(play_icon_class).addClass('fa-2x');
			});
			play_icon_class = '';
		}

		$('.video .overlay').each(function(){
			$(this).off('mouseenter mouseleave');
		});
	}else{
		$('#header-nav').removeClass('fixed-top');
		$('#header-nav').css('padding-top', '0px' );
		$('#header-nav').css('padding-bottom', '0px' );
		$('#header-nav').height(80);
		$('#body-content').css('margin-top', '-20px');
		$('#body-content').css('padding-top', '0');

		$('.video .info').hide();
		$('.video .info').css('background-color', 'rgba(0,0,0,.5)');
		$('.fa-play').each(function(){
			$(this).removeClass(play_icon_class).addClass('fa-3x');
		});
		play_icon_class = 'fa-3x';

		$('.video .overlay').each(function(){
			$(this).hover(
				function(){
					$(this).find('.info').show();
				},
				function(){
					$(this).find('.info').hide();
				}
			);
		});
	}
}

function set_video_overlay(){
	var h;
	$('.overlay').each(function(){
		if ($(this).find('img').length != 0){
			h = $(this).find('img').height();
		} else {
			h = $(this).find('iframe').height();
		}
		$(this).height( h );
	});

	$('.overlay .info').each(function(){
		$(this).css('line-height', $(this).height().toString() + 'px');
	});
}

//SHOP
function load_shop(){

}

function setShop(){
	set_shop_overlay();
	if (nav_toggler_shown()){
		$('.shop-info span').hide();
		$('.shop-info').show();
		$('.shop-info').css('background-color', 'rgba(0,0,0,0)');
		$('.shop-overlay').each(function(){
			$(this).off('mouseenter mouseleave');
		});
	}else{
		$('.shop-info span').show();
		$('.shop-info').hide();
		$('.shop-info').css('background-color', 'rgba(0,0,0,.5)');
		$('.shop-overlay').each(function(){
			$(this).hover(
				function(){
					$(this).find('.shop-info').show();
				},
				function(){
					$(this).find('.shop-info').hide();
				}
			);
		});
	}
}

function set_shop_overlay(){
	$('.shop-overlay .shop-info').each(function(){
		$(this).css('line-height', $(this).height().toString() + 'px');
	});
}

//CONTACT
function load_contact(){

}









