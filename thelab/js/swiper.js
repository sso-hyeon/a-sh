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
        document.querySelector(".logo").classList.add("dark");
        document.querySelectorAll(".menuIcon").forEach(icon => {
            icon.classList.add("dark");
        });
        document.querySelectorAll(".count").forEach(icon => {
            icon.classList.add("dark");
        });
        document.querySelector("header").style.color = "#444";
    } else {
        document.querySelector(".logo").classList.remove("dark");
        document.querySelectorAll(".menuIcon").forEach(icon => {
            icon.classList.remove("dark");
        });
        document.querySelectorAll(".count").forEach(icon => {
            icon.classList.remove("dark");
        });
        document.querySelector(".count").classList.remove("dark");
        document.querySelector("header").style.color = "#fff";
    }
}
