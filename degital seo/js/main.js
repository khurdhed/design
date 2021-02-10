// preloader
var preloader = document.getElementById('preload')
function myFunction(){
    preloader.style.display='none'
}

// top bottom


$(document).ready( function() {
    $('#backTop').backTop({
        'position' : 1100,
        'speed' : 500,
        'color' : 'red',
    });
});


// mean-menu

$(document).ready(function(){

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "800",

});

});



// owl-carousel\\
 $('.owl-carousel').owlCarousel({
    margin: 10,
    loop:true,
    nav:true,
    center:true,
    mouseDrag:true,
    dots:false,
    // autoplay:true,
    autoplaytimeout:4000,
    navText: ['←','→'],
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


//   image popup

// chat

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }