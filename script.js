$(document).ready(function(){
    // Function to handle sticky navbar on scroll
    function handleStickyNavbar() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    }

    // Function to handle scroll-up button show/hide
    function handleScrollUpButton() {
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    }

    // Scroll Event Listener
    $(window).scroll(function() {
        handleStickyNavbar();
        handleScrollUpButton();
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

   
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if ($('.navbar .menu').hasClass("active")) {
            // If menu is active, adjust styles for smaller icons
            $('.nav-item .icon').css("font-size", "12px");
        } else {
            // Reset to original size when menu is not active
            $('.nav-item .icon').css("font-size", "14px");
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Product Manager", "Software Architect", "Developer", "Blogger", "Tech Leader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Product Manager", "Software Architect", "Developer", "Blogger", "Tech Leader", "Product Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //JavaScript to update the year automatically
    function addCopyright(){
        var currentYear = new Date().getFullYear();
        var element = document.getElementById("copyright");
        element.innerHTML =  currentYear;
    }
    addCopyright();
    
    //Function to Register the Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      }

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
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