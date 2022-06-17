$(document).ready(function() {
  $('#book-item a').mouseenter(()=>{
    $('#book-item a img').css('opacity', '.5');
  }).mouseleave(()=>{
    $('#book-item a img').css('opacity', '1');
  });
});
