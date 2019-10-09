/*==============Navbar Transparent To Solid===================*/

$(document).ready(function () { //when document(DOM) loads completely. 
    // Transition effect for navbar 
    $(window).scroll(function () { //function is called while you scrolls 
        // checks if window is scrolled more than 300px, adds/removes solid class
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
        } else {
            $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
        }
    });
});

/*==============Navbar Name Hover===================*/
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    })
})

/*========== SMOOTH SCROLLING TO LINKS ON THE SAME PAGE ==========*/
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({ //animate whole html and body elements
                scrollTop: $(hash).offset().top //scroll to the element with that hash
            }, 800, function () {
                window.location.hash = hash;
            });
        } //End if
    });
});

/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () {
    $(document).ready(function () {
        $(".arrow").CSS("OPACITY", 1 - $(WINDOW).scrollTop() / 250);
    });
});

/*========== Cards In The Team Section ==========*/
$(document).ready(function () {
    /*---OWL Animation---*/
    $("#team-slider").owlCarousel({
        items: 3,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});

/*========== Skills Counter ==========*/
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1800
    });
});

/*========== Clients circle photo animation ==========*/
$(document).ready(function () {
    /*---OWL Animation---*/
    $("#client-slider").owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 1700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
        }
    });
});

/*----- Top Scroll----*/
$(document).ready(function () { //when document is ready
    $(window).scroll(function () { //when webpage is scrolled
        if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
            $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
        } else { //if not
            $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
        }
    });
});