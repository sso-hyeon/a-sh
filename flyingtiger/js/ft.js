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

    /* img hover_new */
    $(".new1 img").hover(
        function () {
            $(this).attr({ src: "images/new_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new1.jpg" });
        }
    );
    $(".new2 img").hover(
        function () {
            $(this).attr({ src: "images/new_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new2.jpg" });
        }
    );
    $(".new3 img").hover(
        function () {
            $(this).attr({ src: "images/new_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new3.jpg" });
        }
    );
    $(".new4 img").hover(
        function () {
            $(this).attr({ src: "images/new_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new4.jpg" });
        }
    );
    $(".new5 img").hover(
        function () {
            $(this).attr({ src: "images/new_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new5.jpg" });
        }
    );
    $(".new6 img").hover(
        function () {
            $(this).attr({ src: "images/new6_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new6.jpg" });
        }
    );
    $(".new7 img").hover(
        function () {
            $(this).attr({ src: "images/new7_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new7.jpg" });
        }
    );
    $(".new8 img").hover(
        function () {
            $(this).attr({ src: "images/new8_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/new8.jpg" });
        }
    );

    /* img hover_best */
    $(".best1 img").hover(
        function () {
            $(this).attr({ src: "images/best1_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best1.jpg" });
        }
    );
    $(".best2 img").hover(
        function () {
            $(this).attr({ src: "images/best2_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best2.jpg" });
        }
    );
    $(".best3 img").hover(
        function () {
            $(this).attr({ src: "images/best3_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best3.jpg" });
        }
    );
    $(".best4 img").hover(
        function () {
            $(this).attr({ src: "images/best4_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best4.jpg" });
        }
    );
    $(".best5 img").hover(
        function () {
            $(this).attr({ src: "images/best5_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best5.jpg" });
        }
    );
    $(".best6 img").hover(
        function () {
            $(this).attr({ src: "images/best6_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best6.jpg" });
        }
    );
    $(".best7 img").hover(
        function () {
            $(this).attr({ src: "images/best7_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best7.jpg" });
        }
    );
    $(".best8 img").hover(
        function () {
            $(this).attr({ src: "images/best8_h.jpg" });
        },
        function () {
            $(this).attr({ src: "images/best8.jpg" });
        }
    );
});

window.addEventListener("scroll", function () {
    document.querySelector(".slide_marquee1").style.backgroundPositionX = "-" + this.scrollY / 2 + "px";
    document.querySelector(".slide_marquee2").style.backgroundPositionX = this.scrollY / 2 + "px";
    document.querySelector(".slide_marquee3").style.backgroundPositionX = "-" + this.scrollY / 2 + "px";
});
