$(function () {
    $("#menu1").on("click", function () {});
    $("#nav-icon4").click(function () {
        $(this).toggleClass("open");
        $(".mb_nav").toggleClass("active");
    });

    var windowWidth = $(window).width();

    AOS.init({
        easing: "ease-in-out-sine"
    });

    if (windowWidth < 768) {
        const swiper = new Swiper(".swiper-container", {
            autoplay: { delay: 1500 }, //자동 슬라이드
            spaceBetween: 30, //이미지 사이
            loop: true //반복(첫화면으로 자연스럽게 이동) false = 왼쪽으로 첫페이지로 다시 돌아가서 반복
        });

        const type = new Typewriter(".tag", {
            autoStart: true, //자동 시작
            loop: true //반복
        });
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
        const swiper = new Swiper(".swiper-container", {
            slidesPerView: 3,
            autoplay: { delay: 1500 }, //자동 슬라이드
            spaceBetween: 20, //이미지 사이
            loop: true //반복(첫화면으로 자연스럽게 이동) false = 왼쪽으로 첫페이지로 다시 돌아가서 반복
        });

        const type = new Typewriter(".tag", {
            autoStart: true, //자동 시작
            loop: true //반복
        });
        type.typeString("#스마일#성실함")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("#배려#소통#차분함")
            .pauseFor(1000)
            .start();
    }
});
