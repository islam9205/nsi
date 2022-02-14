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
				breakpoint: 320,
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
    dots:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
    appendArrows:$('.reviews__content')
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
