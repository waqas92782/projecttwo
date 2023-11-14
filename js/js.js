
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots:true,
        },

        680: {
            items:2,
        },
        1000: {
            items: 3
        }
    }
});