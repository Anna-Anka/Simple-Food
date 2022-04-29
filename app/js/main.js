$(function() {

    $('.reviews__slider').slick({
        dots: true,
        prevArrow: '<button class="reviews__arrow reviews__arrow--prev"></button>',
        nextArrow: '<button class="reviews__arrow reviews__arrow--next"></button>',
    });

    var mixer = mixitup('.popular-categories__items');

});