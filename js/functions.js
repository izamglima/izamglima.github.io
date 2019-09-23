$(function() {
	smoothScroll(1000);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

// Check if elements should be animated
$(document).ready(function(){	
	if ($('.animate').length) {
		animate($(window).scrollTop());
	}
});

function animate(winST) {
	$('.animate').each(function(){
		if (winST + ($(window).height() - 100) > $(this).offset().top) {
			$(this).addClass('animated');
		}
	});
}

$(document).on('scroll', function(){
	var winST = $(window).scrollTop();

	// Check if elements should be animated
	if ($('.animate').length) {
		animate(winST);
	}
});
