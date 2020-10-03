$(document).ready(function() {
	setTimeout(function(){
		setFrames();

		$(window).resize(function(){
			setFrames();
		});
	}, 300);
});

function setFrames(){
	var dim = $('.album').width();
	$('.spotify-wrapper iframe').width(dim).height(dim);
}
