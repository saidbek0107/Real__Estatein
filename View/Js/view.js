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



/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ===================== Slide ====================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


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