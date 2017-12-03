//_____GET YOUTUBE PLAYER_______
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function() {
	setTimeout(function(){
		set_load('video');
	}, 300);
});

var play_icon_class = 'fa-3x';

function load_video(){
	$('#video-container .overlay').each(function(){
		var width = $(this).width();
		var height = (width * 9) / 16;
		var vid_id;
		switch($(this).find('img').attr('id')){
			case 'body-img':
				vid_id = 'KmXnuD-JpOs';
				break;
			case 'roadhead-img':
				vid_id = 'cCmLjb-ocPY';
				break;
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

		$(this).replaceWith('<div class="video-wrapper"><iframe id="player" class="player" " src="https://www.youtube.com/embed/'+vid_id+'?enablejsapi=1&showinfo=0&origin=http://japanesebreakfast.rocks" frameborder="0" allowfullscreen></iframe></div>');
		$('.video-wrapper').width(width);
		$('.video-wrapper').height(height);
		$('.player').width('100%');
		$('.player').height('100%');
		// $('.player').setPlaybackQuality('default');
	});

	//_____SET VIDEOS_______
	var img = $('.video-wrapper').first();
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