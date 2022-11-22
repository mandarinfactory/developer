$(function () {
    function scrollSpy () {
        var scrTop = $(window).scrollTop();
        var offstTwo = $('.section2').offset().top;
        var offstThree = $('.section3').offset().top;
        var offstFour = $('.section4').offset().top;
        $('nav a').removeClass('active') /* 일단 active-class 다 끄고 시작! */
        if (scrTop < offstTwo - 40) {
            $('.a1').addClass('active')
        }
        else if(scrTop >= offstTwo - 40 && scrTop < offstThree - 40){// >= ~ 부터 <  ~ 까지
            $('.a2').addClass('active')
        } 
        else if(scrTop >= offstThree - 40 && scrTop < offstFour - 40){// >= ~ 부터 <  ~ 까지
            $('.a3').addClass('active')
        } 
        else if(scrTop >= offstFour - 40){// >= ~ 부터 <  ~ 까지
            $('.a4').addClass('active')
        } 
    }//function

    scrollSpy();

    $(window).resize(function () {
        scrollSpy();
    }).scroll(function () {
        scrollSpy();
    })//resize && scroll

})//document.ready