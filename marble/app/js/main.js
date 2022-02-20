$('.header__burger').click(function(evt){
    $('.header__burger, .header__nav').toggleClass('active');
     $('body').toggleClass('lock');
})

$('.portfolio__slider-1').slick({
    arrows: true,
    prevArrow: '<button class="slider__arrow prev-arrow"><img src="./images/slider-arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button class="slider__arrow next-arrow"><img src="./images/slider-arrow-right.svg" alt="arrow"></button>',
    
});

$('.restoration__slider').slick({
    prevArrow: '<button class="slider__arrow prev-arrow"><img src="./images/slider-arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button class="slider__arrow next-arrow"><img src="./images/slider-arrow-right.svg" alt="arrow"></button>',
});





