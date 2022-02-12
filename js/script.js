$(document).ready(function(){
	$('.our-projects-slider').slick({
		arrows:true,
		slidesToShow:2,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
    appendArrows:$('.our-projects-content')
		/* responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] */
	});
});

$(document).ready(function(){
	$('.reviews-slider').slick({
		arrows:true,
    dots:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
    appendArrows:$('.reviews-content')
		/* responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] */
	});
});
