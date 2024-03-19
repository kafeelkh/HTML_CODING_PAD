$(document).ready(function(){
    $(window).scroll(function(){ 
        if(this.scrollY > 20){
             $('.navbar').addClass("sticky");
        }else{
                $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
        }else{
              $('.scroll-up-btn').removeClass("show");
        }
    });




$('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
});
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


var typed = new Typed(".typing-1", {
        strings: ["H-Pad", "HTML-PAD", "Voice to Code",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


 var typed = new Typed(".codi", {
        strings: ["Hello Voice Coder! Now coding does not need you hands to be busy. The new H-PAD has come up with hands-free coding that will lighten up the overhead of typing and codes for you as per your voice instructions.Enjoy a step forward to smart coding."],
        typeSpeed: 5,
        loop: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["H-Pad", "HTML-PAD", "Voice Coding Pad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});