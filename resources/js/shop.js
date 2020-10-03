$(document).ready(function() {
	setTimeout(function(){
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
	}, 300);
});

function set_shop_overlay(){
	$('.shop-overlay .shop-info').each(function(){
		var new_line_height = $('.shop-overlay .shop-info').first().height().toString() + 'px';
		$(this).css('line-height', new_line_height);
	});
}
