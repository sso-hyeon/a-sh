$(function () {
    AOS.init({
        easing: "ease-in-out-sine"
    });

    $('a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });

    const swiper = new Swiper(".swiper-container", {
        autoplay: { delay: 3000 }, //자동 슬라이드
        slidesPerView: 1, //화면당 이미지
        spaceBetween: 30, //이미지 사이
        loop: true, //반복(첫화면으로 자연스럽게 이동) false = 왼쪽으로 첫페이지로 다시 돌아가서 반복
        pagination: {
            //하단 버튼
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            //좌 우 화살표
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //원하는 페이지로 이동(loop 버전)
    $("#gnb li").on("click", function () {
        let i = $(this).index();
        swiper.slideToLoop(i);
        swiper.autoplay.start();
    });

    $(".btn").click(function () {
        $(this).prev().children().removeClass("btn_hide");
        $(this).css("display", "none");
    });

    $(".hamburger").click(function () {
        $(this).children().toggleClass("open");
        $(".menu").toggleClass("active");
    });
});

const newItems = document.querySelectorAll(".new-item img");
newItems.forEach((item, idx) => {
    if (idx < 5) {
        item.addEventListener("mouseover", function () {
            this.setAttribute("src", "images/product/new/new_h.jpg");
        });
    } else {
        item.addEventListener("mouseover", function () {
            this.setAttribute("src", "images/product/new/new" + (idx + 1) + "_h.jpg");
        });
    }
    item.addEventListener("mouseout", function () {
        this.setAttribute("src", "images/product/new/new" + (idx + 1) + ".jpg");
    });
});

const bestItems = document.querySelectorAll(".best-item img");
bestItems.forEach((item, idx) => {
    item.addEventListener("mouseover", function () {
        this.setAttribute("src", "images/product/best/best" + (idx + 1) + "_h.jpg");
    });
    item.addEventListener("mouseout", function () {
        this.setAttribute("src", "images/product/best/best" + (idx + 1) + ".jpg");
    });
});

window.addEventListener("scroll", function () {
    document.querySelector(".slide_marquee1").style.backgroundPositionX = "-" + this.scrollY / 2 + "px";
    document.querySelector(".slide_marquee2").style.backgroundPositionX = this.scrollY / 2 + "px";
    document.querySelector(".slide_marquee3").style.backgroundPositionX = "-" + this.scrollY / 2 + "px";
});
