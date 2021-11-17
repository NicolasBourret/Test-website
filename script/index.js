const countDownDate = new Date("Nov 30, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (days < 10) {
    days = "0" + days;
  }

  // Display the result in the element with id="demo"
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

const chevrons = document.querySelectorAll(".fa-chevron-down");
const responses = document.querySelectorAll(".response");

chevrons.forEach((chevron, index) => {
  chevron.addEventListener("click", () => {
    responses[index].classList.toggle("translate-bottom");
  });
});

const menuBurger = document.querySelector("#activ-nav");
const navlist = document.querySelector(".nav-mobile ul");

menuBurger.addEventListener("click", () => {
  navlist.classList.toggle("display-nav");
});
