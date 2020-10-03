var firstPhotoLoad = true;

//_____GET YOUTUBE PLAYER_______
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function(){
  //VIDEOLIST
  var videos = [
    't3bjPGUDl1k',
    'KmXnuD-JpOs',
    'cCmLjb-ocPY',
    'wujw-FH2Itw',
    'KNT7wuqaykc',
    'zqa-v9A3Ecw',
    'hOsLEKnbl7I'
  ];

  var captions = [
    ['Boyish', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Body Is A Blade', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Road Head', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Machinist', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Everybody Wants To Love You', 'Directed by Adam Kolodny and Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Jane Cum', 'Directed & Photographed by Adam Kolodny', 'Concept by Michelle Zauner and Adam Kolodny'],
    ['In Heaven', 'Directed & Photographed by Adam Kolodny', 'Concept by Michelle Zauner and Adam Kolodny']
  ];

  for (var i = 0; i < videos.length; i++){
    $('#body-content').append('<div class="video"><div class="video-wrapper"><iframe id="player" class="player" src="https://www.youtube.com/embed/'+videos[i]+'?enablejsapi=1&showinfo=0&origin=http://japanesebreakfast.rocks" frameborder="0" allowfullscreen></iframe></div></div><div class="caption"><div class="row align-items-center"><p class="col">'+captions[i][0]+'</p></div><div class="row align-items-center"><p class="col video-cred">'+captions[i][1]+'<br>'+captions[i][2]+'</p></div></div>');
  }

  setVideoPlayerHeight();

  $(window).on('resize', function(){
    setVideoPlayerHeight();
  });

});

function setVideoPlayerHeight(){
  $('.player').height( ($('.video').width() * 9) / 16 );
}
