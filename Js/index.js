/*=============== SHOW MENU ===============*/
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
    const body = document.querySelector('body')


navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    body.classList.add('hidden')
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    body.classList.remove('hidden')
});


/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper('.card__content', {

    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});


/*=============== Profile SWIPER JS ===============*/
let swiperCards2 = new Swiper('.card__content2', {

    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});


/*=============== Question SWIPER JS ===============*/
let swiperCards3 = new Swiper('.card__content3', {

    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});


/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    loader__bg = document.querySelector('.loader__bg')

    // Loader
    setTimeout(() => {
        loader__bg.style.opacity = '0'
        setTimeout(() => {
            loader__bg.style.display = 'none'
        }, 500)
    }, 2000)

});