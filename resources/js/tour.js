//____POPULATE TOUR SECTION_______
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://rest.bandsintown.com/artists/japanesebreakfast/events?app_id=japanesebreakfastofficialsite", true);
// xhr.onload = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//     	var response = JSON.parse(xhr.responseText);
// 		for(i=0; i<response.length; i++){
// 			var event = create_event_row(response[i]);
// 			$('#tour-container').append(event);
// 		}
//     } else {
//       console.error(xhr.statusText);
//     }
//   }
// };
// xhr.onerror = function (e) {
//   console.error(xhr.statusText);
// };
// xhr.send(null);
// $('#tour-container').find('.row').last().find('.evt').css('border-bottom', 'none');

$(document).ready(function() {
	setTimeout(function(){
		$('#body-content').removeClass('text-center');
    $('#seated-55fdf2c0').show();
		checkBodyHeight();

		$(window).resize(() => {
			checkBodyHeight();
		});
	}, 300);
});

function checkBodyHeight(){
	if ($('#seated-55fdf2c0').height() + $('#header-nav').outerHeight() + $('#footer-nav').outerHeight() < $(window).height()){
		$('#body-content').height($(window).height() - $('#header-nav').outerHeight() - $('#footer-nav').outerHeight());
	}
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
