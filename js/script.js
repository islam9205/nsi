$(document).ready(function(){
	$('.our-projects__slider').slick({
		arrows:true,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
    appendArrows:$('.our-projects__content'),
		responsive:[
			{
				breakpoint: 330,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.reviews__slider').slick({
		arrows:true,
		slidesToShow:3,
    dots:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
    appendArrows:$('.reviews__content'),
		responsive:[
			{
				breakpoint: 770,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 1450,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});
