const menuButtons = document.querySelectorAll(".lnb-menu-item");
const menuNames = []; // lnb 버튼 data-lnb values
let contentsSecOffsetTopValue = []; // .contents-sections offsetTop values
let swiper; // main swiper

const type = new Typewriter(".tag", {
  autoStart: true, //자동 시작
  loop: true, //반복
});

window.addEventListener("resize", function () {
  setSwiper();
});

window.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    easing: "ease-in-out-sine",
  });

  menuButtons.forEach((item) => {
    menuNames.push(item.dataset.lnb);
  });
  setSwiper();
  setElemOffsetTopValue();

  type
    .typeString("#스마일#성실함")
    .pauseFor(600)
    .typeString("<br>")
    .typeString("#배려#소통#차분함")
    .pauseFor(1000)
    .start();
});

window.addEventListener("scroll", () => {
  test();
});

const test = debounce(() => {
  // console.log(window.scrollY);
  const x = contentsSecOffsetTopValue.filter(
    (val) => val.value < window.scrollY
  );
  console.log(x);
}, 500);

document.querySelector(".lnb-menu").addEventListener("click", (e) => {
  if (e.target.localName !== "button") {
    return;
  }
  console.log(contentsSecOffsetTopValue);

  const targetDataName = e.target.dataset.lnb;
  setScrollToSection(targetDataName);
});

const setSwiper = debounce(() => {
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
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      });
    }
  }
}, 500);

const setElemOffsetTopValue = debounce(() => {
  const value = [];
  menuNames.map((menu) => {
    const targetElem = document.querySelector(
      `.contents-section[data-lnb='${menu}']`
    );

    const lnbHeight = document.querySelector(".lnb").clientHeight;
    const elemTop = targetElem.offsetTop;

    value.push({ name: menu, value: lnbHeight + elemTop });
  });

  return (contentsSecOffsetTopValue = value);
});

function setScrollToSection(target) {
  const targetElem = document.querySelector(
    `.contents-section[data-lnb='${target}']`
  );
  const lnbHeight = document.querySelector(".lnb").clientHeight;
  const elemTop = targetElem.offsetTop;

  window.scrollTo({ top: elemTop - lnbHeight, behavior: "smooth" });
}
