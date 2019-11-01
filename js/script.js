$( document ).ready(function() {

    //1
    $('.box__one > a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').css({zIndex: '10'});

        if($(this).hasClass('active')) {
            $('.inner__one').css({width: '100%'}).slideDown(1000);
        }
        else {
            $('.inner__one').css({width: '0%'}).slideUp(1000);
        }
    });

    // 2
    $('.inner__two__active').hide();

    $('.box__two > a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').css({zIndex: '10'});

        if($(this).hasClass('active')) {
            $('.inner__two').css({width: '100%'}).slideDown(1000);
        }
        else {
            $('.inner__two').css({width: '0%'}).slideUp(1000);
        }

        $('.inner__two__active').show(1000);
    });

    // 3
    $('.box__three > a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').css({zIndex: '10'});

        if($(this).hasClass('active')) {
            $('.inner__three').css({width: '100%'}).slideDown(1000);
        }
        else {
            $('.inner__three').css({width: '0%'}).slideUp(1000);
        }
    });

    // 4
    $('.box__four > a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').css({zIndex: '10'});

        if($(this).hasClass('active')) {
            $('.inner__four').css({width: '100%'}).slideDown(1000);
        }
        else {
            $('.inner__four').css({width: '0%'}).slideUp(1000);
        }
    });


        //form click
    $('.btn__from > button').on('click', function () {
        $('.form').fadeIn(1000);
    });

    $('.form img').on('click', function () {
        $('.form').fadeOut();
    });

});