const type = new Typewriter(".tag", {
    autoStart: true, //자동 시작
    loop: true //반복
});

let windowWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (windowWidth < 1200) {
        location.href = "https://sso-hyeon.github.io/a-sh/index_m.html";
    } else {
        location.href = "https://sso-hyeon.github.io/a-sh/index.html";
    }
});

window.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        easing: "ease-in-out-sine"
    });

    let swiper;

    if (windowWidth < 1200) {
        if (768 <= windowWidth) {
            swiper = new Swiper(".swiper-container", {
                slidesPerView: 3,
                autoplay: { delay: 1500, disableOnInteraction: false },
                spaceBetween: 25,
                loop: true
            });
        } else {
            swiper = new Swiper(".swiper-container", {
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
        location.href = "https://sso-hyeon.github.io/a-sh/portfolio.html";
    });
}
