/*!
 * FINAL LEK
 */
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $(".fit-this-text").fitText(
        1, {
            minFontSize: '20px',
            maxFontSize: '46px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    // Initialize WOW.js Scrolling Animations
    new WOW().init();


        // Make the rotation of the arrows on the accordion
    jQuery.fn.rotate = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)',
        '-webkit-transition': 'all 0.3s ease-out',
        '-moz-transition': 'all 0.3s ease-out',
        '-o-transition': 'all 0.3s ease-out',
        'transition': 'all 0.3s ease-out'});
    };

})(jQuery); // End of use strict
