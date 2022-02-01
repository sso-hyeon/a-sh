const type = new Typewriter(".tag", {
    autoStart: true, //자동 시작
    loop: true //반복
});

let windowWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (this.innerWidth < 1200) {
        location.href = "./index_m.html";
    } else {
        location.href = "./index.html";
    }
});

window.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        easing: "ease-in-out-sine"
    });

    if (windowWidth < 1200) {
        if (768 <= windowWidth) {
            const swiper = new Swiper(".swiper-container", {
                slidesPerView: 3,
                autoplay: { delay: 1500, disableOnInteraction: false },
                spaceBetween: 25,
                loop: true
            });
        } else {
            const swiper = new Swiper(".swiper-container", {
                autoplay: { delay: 1500, disableOnInteraction: false },
                spaceBetween: 30,
                loop: true
            });
        }

        type.typeString("#스마일")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("#성실함#배려")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("#소통#차분함")
            .pauseFor(1000)
            .start();
    } else {
        goPortfolioPage();
        type.typeString("#스마일#성실함")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("#배려#소통#차분함")
            .pauseFor(1000)
            .start();
    }
});

function goPortfolioPage() {
    const slide = document.querySelector(".slide");

    slide.addEventListener("click", function () {
        location.href = "./portfolio.html";
    });
}
