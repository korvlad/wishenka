	$('.navbar .dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
		}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
	});

	$(document).ready(function(){
          $('.slider').slick({
	      	accessibility: false,
	      	arrows: true,
	      	autoplay: true,
	      	pauseOnHover: true,
	        speed: 700
      });
    });

 $(document).ready(function(){
          $('.news-slider').slick({
          	autoplay: true,
          	autoplaySpeed: 5000, 
          	infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4
      });
    });
   