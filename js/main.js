let swiper;
const type = new Typewriter(".tag", {
  autoStart: true, //자동 시작
  loop: true, //반복
});

window.addEventListener("resize", function () {
  resizeSwiper();
});

window.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    easing: "ease-in-out-sine",
  });

  // goPortfolioPage();
  resizeSwiper();

  type
    .typeString("#스마일#성실함")
    .pauseFor(600)
    .typeString("<br>")
    .typeString("#배려#소통#차분함")
    .pauseFor(1000)
    .start();
});

function resizeSwiper() {
  console.log(this.innerWidth);
  if (1200 > this.innerWidth) {
    if (this.innerWidth > 768) {
      swiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 3,
        autoplay: { delay: 1500, disableOnInteraction: false },
        spaceBetween: 25,
        loop: true,
      });
    } else {
      swiper = new Swiper(".portfolio-swiper", {
        autoplay: { delay: 1500, disableOnInteraction: false },
        spaceBetween: 30,
        loop: true,
      });
    }
  }
}
