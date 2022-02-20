const logo = document.querySelector(".logo");
const menuIcon = document.querySelectorAll(".menuIcon");
const counts = document.querySelectorAll(".count");
const header = document.querySelector("header");

const mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets"
    },
    on: {
        slideChange: slideChangeEvent
    }
});

function slideChangeEvent() {
    const idx = this.realIndex;

    if (idx === 1) {
        logo.classList.add("dark");
        menuIcon.forEach(icon => {
            icon.classList.add("dark");
        });
        counts.forEach(icon => {
            icon.classList.add("dark");
        });
        header.style.color = "#444";
    } else {
        logo.classList.remove("dark");
        menuIcon.forEach(icon => {
            icon.classList.remove("dark");
        });
        counts.forEach(icon => {
            icon.classList.remove("dark");
        });
        header.style.color = "#fff";
    }
}
