const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    watchOverflow: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});