$(function () {

    // Custom JS

    //Owl Carousel
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        margin: 10,
        autoHeight: true,
        navText: ['<i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'zoomOutUp'
    });

    //Toggle menu
    $(".toggle-mnu").click(function () {
        $(this).toggleClass("on");
        $(".top-menu").slideToggle();
        return false;
    });

    //Services
    $('.services .item .description').equalHeights();

    //Projects
    $('.projects .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        navText: ['<i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    //Magnific Popup
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

    //Btn-top
    $('body').append('<button type="button" class="btn-top"><i class="fa fa-angle-double-up fa-2x"></i></button>');

    $('body').on('click', '.btn-top', function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.btn-top').addClass('active');
        } else {
            $('.btn-top').removeClass('active');
        }
    });

    $('.services .item').animated('fadeInDown');
    $('.projects .owl-item').animated('flipInY');
    $('.advantages .item').animated('slideInUp');
    $('.footer .contacts').animated('slideInLeft');
    $('.footer .form').animated('slideInRight');

    $('.top-menu a').mPageScroll2id();
});
