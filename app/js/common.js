$(function () {

    // Custom JS

    //Convert svg to html
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

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

    $('.preloader').fadeOut();
});
