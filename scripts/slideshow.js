// slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(img/banner/suabot11.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");

let a = 1;

const slideshow = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 6000);
};

slideshow();

//swiper slider
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 3,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
    1050: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 7,
    },
  },
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
