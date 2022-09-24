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
    'mcoC5ZgaFjY',
    'q2pQIqR-m_w',
    '2ZfcZEIo6Bw',
    't3bjPGUDl1k',
    'KmXnuD-JpOs',
    'cCmLjb-ocPY',
    'wujw-FH2Itw',
    'KNT7wuqaykc',
    'zqa-v9A3Ecw'
  ];

  var captions = [
    ['Savage Good Boy', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny', 'Featuring Michael Imperioli'],
    ['Posing In Bondage', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny', 'Featuring Harmony Tividad'],
    ['Be Sweet', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny', 'Featuring Marisa Dabice'],
    ['Boyish', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Body Is A Blade', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Road Head', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Machinist', 'Directed by Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Everybody Wants To Love You', 'Directed by Adam Kolodny and Michelle Zauner', 'Director of Photography: Adam Kolodny'],
    ['Jane Cum', 'Directed & Photographed by Adam Kolodny', 'Concept by Michelle Zauner and Adam Kolodny']
  ];

  for (var i = 0; i < videos.length; i++){
    var captionString = formatCaption(captions[i]);
    $('#body-content').append('<div class="video"><div class="video-wrapper"><iframe id="player" class="player" src="https://www.youtube.com/embed/'+videos[i]+'?enablejsapi=1&showinfo=0&origin=http://japanesebreakfast.rocks" frameborder="0" allowfullscreen></iframe></div>'+captionString);
  }

  setVideoPlayerHeight();

  $(window).on('resize', function(){
    setVideoPlayerHeight();
  });

});

function formatCaption(caption){
  var subCreds = '';
  for (var i = 1; i < caption.length; i++){
    subCreds += caption[i];
    if (i < caption.length - 1){
      subCreds += '<br>';
    }
  }

  return '<div class="caption"><div class="row align-items-center"><p class="col">'+caption[0]+'</p></div><div class="row align-items-center"><p class="video-cred">'+subCreds+'</p></div></div></div>';
}

function setVideoPlayerHeight(){
  $('.player').height( ($('.video').width() * 9) / 16 );
}
