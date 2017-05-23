window.onbeforeunload = function () {
	$('html, body').hide();
	window.scrollTo(0, 0);
}

$('html, body').hide();
var first_img_load = true;

//_____GET YOUTUBE PLAYER_______
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var window_height;
var window_width;
var header_nav_height;
var nav_toggler_shown;
var last_clicked;
var first_click = true;
var first_load = true;
var home_img_height;

$(document).ready(function() {
	window_width = $(window).width();
	window_height = $(window).height();
	//___SET HEADER NAV HEIGHT______
	console.log("h: "+$(window).height());
	console.log("w: "+$(window).width());
	$('#header-nav').height( window_height * .18934911 );
	header_nav_height = $('#header-nav').height();
	$('#footer-nav').height( window_height * .16715976 );
	$('.custom-nav').css('padding', (window_width * .03868472).toString() );

	//____POPULATE TOUR SECTION_______
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://rest.bandsintown.com/artists/japanesebreakfast/events?app_id=japanesebreakfastofficialsite", true);
	xhr.onload = function (e) {
	  if (xhr.readyState === 4) {
	    if (xhr.status === 200) {
	    	var response = JSON.parse(xhr.responseText);
			for(i=0; i<response.length; i++){
				var event = create_event_row(response[i]);
				$('.tour-container').append(event);
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

	//___SET VIEWS______
	$('html, body').fadeIn(300, 'swing');
	if ( $('#custom-navbar-toggler').is(":visible") ){
		$('#header-nav').removeClass('fixed-top');
		nav_toggler_shown = true;
	} else {
		nav_toggler_shown = false;
	}

	//____TRIGGER HOME PAGE________
	setTimeout(function(){
		$('#home-btn').trigger('click');
	}, 300);

	//____SET EVENT HANDLERS_______
	$('#brand-header').click(function(e) {
		e.preventDefault();
		$('#home-btn').trigger('click');
	});

	$('.nav-item').click( function(e) {
		e.preventDefault();

		$('.nav-item').removeClass('active');
		$(this).addClass('active');

		var name = $(this).attr('data-name');
		if ( last_clicked != name ) {
			if ($('#body-content .section').length > 0) {
					$('#body-content .section').fadeOut( 300, 'swing', function() {
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

	$(window).resize(function(){
		if(last_clicked == 'video'){
			set_video_overlay();
		}
	});

	//____SET SMALL SCREEN EVENT HANDLERS_________
	if (window_width < 500) {
		$('#brand-header').css('font-size', '.8em');
		$('.custom-nav').css('padding', '15px 15px 15px 15px');
		$('.custom-nav .container').css('width', '95%');
		$('.custom-nav .container').css('padding-left', '5%');
	}

	// IF TOGGLER IS VISIBLE
	if ( $('#custom-navbar-toggler').is(":visible") ){
		var toggler_height = $('#custom-navbar-toggler').outerHeight(true);
		if( toggler_height > $('#header-nav .container').height() ){
			$('#custom-navbar-toggler').height( $('#header-nav .container').height() );
			$('.navbar-toggler-icon').height( $('#custom-navbar-toggler').height() );
		}
		$('#header-nav').height('auto');
		$('#body-content').css('padding-top', '0');
		$('#footer-nav .navbar-text').css('font-size', '.5em');
		$('#social-row').width($('#body-content .section').width());
		$('#social-row .social').removeClass('text-right').addClass('text-center');

		$('#custom-navbar-toggler').click(function(){
			first_click = false;
		});

		$('.navbar-collapse').click(function(){
			if ( first_click == false ){
				$('#custom-navbar-toggler').trigger('click');
			}
		});
	}
});

function switch_content( content_name ) {
	$('#body-content .section').hide();
	$('#body-content').empty();
	$('.' + content_name + '-container').clone(true, true).appendTo($('#body-content'));
	$('#body-content .' + content_name + '-container').removeAttr('hidden');

	// SHOW BODY
	$('#body-content .' + content_name + '-container').hide().fadeIn( 300, 'swing');

	// SET DEFAULTS
	if (nav_toggler_shown == false){
		$('#header-nav').height(header_nav_height);
		$('#body-content').css('margin-top', '0');
		$('#body-content').css('padding-top', header_nav_height);
		$('#header-nav').addClass('fixed-top');
	}

	if ( nav_toggler_shown ){
		$('#body-content').css('min-height', (window_height - $('#header-nav').outerHeight()).toString()+'px');
	}else{
		$('#body-content').css('min-height', window_height.toString()+'px');
	}

	if(window_height > $('#body-content .section').height()){
		$('#body-content').addClass('vertical-center');
	}else{
		$('#body-content').removeClass('vertical-center');
	}

	// HOME
	if(content_name == 'home'){
		if (first_load){
			first_load = false;
			var before_icon_height = 21;
			$('#social-row').width($('#body-content .section').width());

			$('.social i').width( window_width * .03125 );
			$('.social i').height( window_width * .03125 );
			$('.social i').css('font-size', (window_width * .0390625 / 2).toString() );
			if($(window).width() > 1500){
				before_icon_height = 32;
				var new_class;
				if($(window).width() > 2000){
					before_icon_height = 48;
					new_class = 'fa-3x';
					$('.social i').css('border-width', '4px');
				}else{
					new_class = 'fa-2x';
				}
				$('.social i').each(function(){
					$(this).removeClass('fa-lg').addClass(new_class);
				});
			}
			$('.social i').css('padding-top', (($('.social i').height() + 4 - before_icon_height)/2).toString()+'px');
			$('.social ul li').css('margin', ($('.social i').width() / 20).toString() + 'px' );
			$('#home-img').height( window_height - $('#header-nav').outerHeight(true) - $('#social-row').outerHeight(true));
			home_img_height = $('#home-img').height();
		}else{
			$('#home-img').height( home_img_height );
		}
	}

	// TOUR
	if(content_name == 'tour'){
		$('#body-content .tour-container').find('.row').last().find('.evt').css('border-bottom', 'none');
	}

	// MUSIC
	if(content_name == 'music'){
		if($('#body-content .section').width() < 600 ){
			$('#ssfap-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A7HXfMFsrVmUQqjhBuLsZtY" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
			$('#psychopomp-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A3i7EHinpu9J5MXKMzjpjZ0&theme=white&view=coverart" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>')
		}
	}

	// VIDEO
	if(content_name == 'video'){
		set_video_overlay();
		if (nav_toggler_shown == false){
			$('#header-nav').removeClass('fixed-top');
			$('#header-nav').outerHeight(80);
			$('#body-content').css('margin-top', '-20px');
			$('#body-content').css('padding-top', '0');
		}else{
			$('.info').show();
			$('.info').css('background-color', 'rgba(0,0,0,0)');
			var small_icon = true;
			if( window_width > 500){
				small_icon = false;
			}
			$('.fa-play').each(function(){
				if (small_icon){
					$(this).removeClass('fa-3x');
				}else{
					$(this).removeClass('fa-3x').addClass('fa-2x');
				}
			});
		}
	}
}

function set_video_overlay(){
	$('.overlay').each(function(){
		if ($(this).find('img').length != 0){
			$(this).height($(this).find('img').height());			
		} else {
			$(this).height($(this).find('iframe').height());
		}
	});

	$('.overlay .info').each(function(){
		$(this).css('line-height', $(this).height().toString() + 'px');
	});	
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

	var append_string = '<div class="row"><div class="col-lg-1 evt event-date">'+date+'</div><div class="col-lg-1 evt event-weekday">'+weekday+'</div><div class="col-lg-3 evt event-name">'+name+'</div><div class="col-lg-2 evt event-location">'+location+'</div><div class="col-lg-5 evt event-links">';
	if (offer == undefined || offer.toLowerCase() == 'sold out'){
		var offer_text;
		if (offer != undefined){
			offer_text = 'sold out';
		}else{
			offer_text = 'tickets';
		}
		append_string += '<a><button type="button" class="btn btn-outline-secondary custom-btn empty">'+offer_text.toUpperCase()+'</button></a>';
	}else{
		append_string += '<a href="'+offerlink+'" target="_blank"><button type="button" class="btn btn-outline-secondary custom-btn">'+offer.toUpperCase()+'</button></a>';
	}
	append_string += '<a href="'+rsvplink+'" target="_blank"><button type="button" class="btn btn-outline-secondary custom-btn">RSVP</button></a></div></div>';

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









