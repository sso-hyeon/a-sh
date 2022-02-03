const type = new Typewriter(".tag", {
    autoStart: true, //자동 시작
    loop: true //반복
});

let windowWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (this.innerWidth < 1200) {
        location.href = "./index_m.html";
    }
});

window.addEventListener("DOMContentLoaded", function () {
    if (windowWidth < 1200) location.href = "./index_m.html";

    AOS.init({
        easing: "ease-in-out-sine"
    });

    goPortfolioPage();

    type.typeString("#스마일#성실함")
        .pauseFor(600)
        .typeString("<br>")
        .typeString("#배려#소통#차분함")
        .pauseFor(1000)
        .start();
});

function goPortfolioPage() {
    const slide = document.querySelector(".slide");

    slide.addEventListener("click", function () {
        location.href = "https://sso-hyeon.github.io/a-sh/portfolio.html";
    });
}
