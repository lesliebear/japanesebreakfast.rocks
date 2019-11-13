$(document).ready(function() {
	setTimeout(function(){
		set_load('music');
		var dim = $('.album').width();
		$('.spotify-wrapper iframe').width(dim).height(dim);
	}, 300);
});

function load_music(){

}

function setMusic(){
	// if( $(window).width() < 992 ){
		// $('.spotify-wrapper iframe').height($('.album').height());
		// $('.spotify-wrapper iframe').width($('.album').height());
	// 	if ( $('.spotify-wrapper iframe').height() > 100){
	// 		$('#ssfap-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A6AOaqWipm2Zk0oBp0uUey2" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
	// 		$('#psychopomp-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A3i7EHinpu9J5MXKMzjpjZ0&theme=white&view=coverart" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
	// 	}
	// }else{
	// 	if ( $('.spotify-wrapper iframe').first().height() < 100 ){
	// 		$('#ssfap-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A6AOaqWipm2Zk0oBp0uUey2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	// 		$('#psychopomp-spotify-wrapper').find('iframe').replaceWith('<iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A3i7EHinpu9J5MXKMzjpjZ0&theme=white" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	// 	}
	// }
}
