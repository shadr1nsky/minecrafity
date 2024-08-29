const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    watchOverflow: true,

    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});

document.querySelector('.blocks-main__install_title').addEventListener('click', function() {
    this.classList.toggle('hidden');
});