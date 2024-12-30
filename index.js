var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5, // Number of slides visible at a time
  spaceBetween:10,

  breakpoints: {
    // When the viewport is >= 640px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When the viewport is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // When the viewport is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
   
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});