// preloader
var preloader = document.getElementById('preload')

function myFunction() {
    preloader.style.display = 'none'
}

// top bottom

$(document).ready(function () {
    $('#backTop').backTop({
        'position': 1100,
        'speed': 500,
        'color': 'red',
    });
});

// quate pop up form

function openForma() {
    document.getElementById("myForma").style.display = "block";
}

function closeForma() {
    document.getElementById("myForma").style.display = "none";
}

// chat massege

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// mean-menu

$(document).ready(function () {

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "800",

    });

});



// owl-carousel\\
$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    center: true,
    mouseDrag: true,
    dots: false,
    // autoplay:true,
    autoplaytimeout: 4000,
    navText: ['←', '→'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// wow.js\\


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();



//   image popup iamg-1

function openImage() {
    document.getElementById("myImage").style.display = "block";
}

function closeImage() {
    document.getElementById("myImage").style.display = "none";
}


//   image popup iamg-2

function openImage1() {
    document.getElementById("myImage1").style.display = "block";
}

function closeImage1() {
    document.getElementById("myImage1").style.display = "none";
}


//   image popup iamg-3

function openImage2() {
    document.getElementById("myImage2").style.display = "block";
}

function closeImage2() {
    document.getElementById("myImage2").style.display = "none";
}