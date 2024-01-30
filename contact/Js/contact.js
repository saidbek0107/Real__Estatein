/*=============== SHOW MENU ===============*/
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
    const body = document.querySelector('body')


navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    body.classList.add('hidden')
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    body.classList.remove('hidden')
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