$(function(){

  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
});

    const swiper = new Swiper('.swiper-container', {
        autoplay: { delay: 4000 },//자동 슬라이드
        slidesPerView: 1,//화면당 이미지
        spaceBetween: 30,//이미지 사이
        loop: true,//반복(첫화면으로 자연스럽게 이동) false = 왼쪽으로 첫페이지로 다시 돌아가서 반복
        pagination: {//하단 버튼
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {//좌 우 화살표
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      
      //원하는 페이지로 이동(loop 버전)
      $('#gnb li').on('click',function(){
          let i = $(this).index();
          swiper.slideToLoop(i);
          swiper.autoplay.start();
        });
        
        var windowWidth = $(window).width();
  
        if(windowWidth < 768) {
  
        } else {
  
        }

      $('.hamburger').on('click',function(){});

    $('.hamburger').click(function(){
        $(this).children().toggleClass('open');
        $('.menu').toggleClass('active');
    });

    /* img hover_new */
    $('.new1 img').hover(function(){
      $(this).attr({'src':'../images/new_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new1.jpg'});
    });
    $('.new2 img').hover(function(){
      $(this).attr({'src':'../images/new_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new2.jpg'});
    });
    $('.new3 img').hover(function(){
      $(this).attr({'src':'../images/new_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new3.jpg'});
    });
    $('.new4 img').hover(function(){
      $(this).attr({'src':'../images/new_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new4.jpg'});
    });
    $('.new5 img').hover(function(){
      $(this).attr({'src':'../images/new_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new5.jpg'});
    });
    $('.new6 img').hover(function(){
      $(this).attr({'src':'../images/new6_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new6.jpg'});
    });
    $('.new7 img').hover(function(){
      $(this).attr({'src':'../images/new7_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new7.jpg'});
    });
    $('.new8 img').hover(function(){
      $(this).attr({'src':'../images/new8_h.jpg'});
    }, function(){
        $(this).attr({'src':'../images/new8.jpg'});
    });

    
    $('.des_list h5').on('click',function(){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().children('.slide_toggle').stop().slideUp();
    });

    $('.color1').on('click',function(){
        $('.main_img').attr({'src':'../images/new1.jpg','alt':'신발아니고 필통'});
        $(this).siblings().removeClass('color_shadow');
        $(this).addClass('color_shadow');
    });
    $('.color2').on('click',function(){
        $('.main_img').attr({'src':'../images/new2.jpg','alt':'신발아니고 필통'});
        $(this).siblings().removeClass('color_shadow');
        $(this).addClass('color_shadow');
    });
    $('.color3').on('click',function(){
        $('.main_img').attr({'src':'../images/new3.jpg','alt':'신발아니고 필통'});
        $(this).siblings().removeClass('color_shadow');
        $(this).addClass('color_shadow');
    });
    $('.color4').on('click',function(){
        $('.main_img').attr({'src':'../images/new4.jpg','alt':'신발아니고 필통'});
        $(this).siblings().removeClass('color_shadow');
        $(this).addClass('color_shadow');
    });
    $('.color5').on('click',function(){
        $('.main_img').attr({'src':'../images/new5.jpg','alt':'신발아니고 필통'});
        $(this).siblings().removeClass('color_shadow');
        $(this).addClass('color_shadow');
    });

    $('.gallery li').on('click',function(){
        let src = $(this).children().attr('src');
        $('.main_img').attr({'src':src});
    });
    
    $('.like').on('click',function(){
        $(this).children().attr({'src':'../images/srote_icon-heart.svg'});
    });

    $('.max').on('click',function(){
      $('.product li').css('width','48%');
    });
    $('.min').on('click',function(){
      $('.product li').css('width','23%');
    });
});