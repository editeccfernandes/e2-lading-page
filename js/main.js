//Back to top
//confirmação da submissão
//Easter egg na consola
var document_height = $(document).height();
var window_height = $(window).height();
var window_scroll_top = $(window).scrollTop();

$(function () {
    var nav = $(".navigation");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 500) {
            nav.addClass('navigation--small');
            $('.top').fadeIn(300);

        } else if (scroll == 0) {
            nav.removeClass("navigation--small");

        } else {
            $('.top').fadeOut(300);


        }
    });
});

$('.top button, .navigation__item__logo').on('click', function () {
    $(window).scrollTop(0);
});

$.fn.inviewport = function () {
    var offset_top = $(this).offset().top;
    var element_height = offset_top + $(this).outerHeight();
    var window_scroll_top = $(window).scrollTop();
    var viewport_bottom = window_scroll_top + $(window).height();

    return element_height > window_scroll_top && offset_top < viewport_bottom;
};

$(window).on('resize scroll', function () {
    if ($('#home').inviewport()) {
        console.log('a')
    }
    else {

        console.log('b')
    }
});

$(window).on('resize scroll', function () {
    if ($('#about').inviewport()) {
        $('#about-nav').addClass(' bg--blue');

    }
    else {

        $('#about-nav').removeClass(' bg--blue');
    }
});

$(window).on('resize scroll', function () {
    if ($('#episodes').inviewport()) {
        $('#episodes-nav').addClass(' bg--red');

    }
    else {
        $('#episodes-nav').removeClass(' bg--red');
    }
});

$(window).on('resize scroll', function () {
    if ($('#contacts').inviewport()) {
        $('#contacts-nav').addClass(' bg--green');

    }
    else {
        $('#contacts-nav').removeClass(' bg--green');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('#episodes-nav').removeClass(' bg--red');
    }
});



