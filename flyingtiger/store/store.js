$(function () {
    $('a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });

    const swiper = new Swiper(".swiper-container", {
        autoplay: { delay: 4000 }, //자동 슬라이드
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

    var windowWidth = $(window).width();

    if (windowWidth < 768) {
    } else {
    }

    $(".hamburger").on("click", function () {});

    $(".hamburger").click(function () {
        $(this).children().toggleClass("open");
        $(".menu").toggleClass("active");
    });

    /* img hover_new */
    const newItems = document.querySelectorAll(".new-item img");
    newItems.forEach((item, idx) => {
        if (idx < 5) {
            item.addEventListener("mouseover", function () {
                this.setAttribute("src", "../images/product/new/new_h.jpg");
            });
        } else {
            item.addEventListener("mouseover", function () {
                this.setAttribute("src", "../images/product/new/new" + (idx + 1) + "_h.jpg");
            });
        }
        item.addEventListener("mouseout", function () {
            this.setAttribute("src", "../images/product/new/new" + (idx + 1) + ".jpg");
        });
    });

    $(".des_list h5").on("click", function () {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().children(".slide_toggle").stop().slideUp();
    });

    const colorWrap = document.querySelector(".color_wrap");
    const colors = document.querySelectorAll(".color");

    colorWrap.addEventListener("click", function (e) {
        if (!e.target.classList.contains("color")) return;
        const idx = e.target.dataset.idx;
        colors.forEach(ele => {
            ele.classList.remove("color_shadow");
        });
        e.target.classList.add("color_shadow");
        document.querySelector(".main_img").setAttribute("src", "../images/product/new/new" + idx + ".jpg");
    });

    $(".gallery li").on("click", function () {
        let src = $(this).children().attr("src");
        $(".main_img").attr({ src: src });
    });

    $(".like").on("click", function () {
        $(this).children().attr({ src: "../images/srote_icon-heart.svg" });
    });

    $(".max").on("click", function () {
        $(".product li").css("width", "48%");
    });
    $(".min").on("click", function () {
        $(".product li").css("width", "23%");
    });
});
