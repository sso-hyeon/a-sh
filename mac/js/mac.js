$(function(){
    AOS.init({
        easing: 'ease-in-out-sine'
      });
  
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    });
  
    $(window).scroll(function(){
    let scroll_ht = $(window).scrollTop();
    var windowWidth = $(window).width();
  
    if(windowWidth < 768) {
        switch (scroll_ht >= 80) {
            case true:
                 $('header').addClass('down');
                 break;
                 default:
                     $('header').removeClass('down');
        }

    } else {
        switch (scroll_ht >= 80) {
            case true:
                 $('header').addClass('down');
                 $('.hamburger').css('border-bottom','none');
                 $('.user_menu').css('border-bottom','none');
                 break;
                 default:
                     $('header').removeClass('down');
                     $('.hamburger').css('border-bottom','1px solid #fff');
                     $('.user_menu').css('border-bottom','1px solid #fff');
        }

    }
});
$('.hamburger').click(function(){
    $(this).children().toggleClass('open');
    $('.menu').toggleClass('active');
    $('header').toggleClass('black');
});
});
