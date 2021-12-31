function q(par) { return document.querySelector(par) }//queryselector shortland
function qAll(par){ return document.querySelectorAll(par) } //queryselectorAll shortland

if(q(".mobile-open")){
    q(".mobile-open").addEventListener("click", function (e) {
    q(".mobile-menu").classList.add("active")
  });
}

if(q(".mobile-close")){
    q(".mobile-close").addEventListener("click", function (e) {
    q(".mobile-menu").classList.remove("active")
  });
}

///////////////////////////////////////////////
let pcCar = $('.price-carousel .owl-carousel')
pcCar.owlCarousel({
    loop:false,
    nav:false,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1,
            loop:true,
            startPosition: 1,
        },
        600:{
            items:2
        },
        1366:{
            items:3
        }
    }
});
$('.pc-right').click(function() {
    pcCar.trigger('next.owl.carousel', [300]);
})
$('.pc-left').click(function() {
    pcCar.trigger('prev.owl.carousel', [300]);
})
/////////////////////////////////////////////////////////////


if(q(".contact-button")){
    q(".contact-button").addEventListener("click", function (e) {
        q(".contact-form").classList.add("active");
     });
     
     q(".close-contact").addEventListener("click", function(e) {
       q(".contact-form").classList.remove("active");
     });
}
///////////////////////////////////////////////////////////////////////

const price = [
    [
        ["Google"],
        [180, 350, 675],
        [20, 40, 80],
    ],    
    [
        ["Trustpilot"],
        [300, 590 , 975],
        [10, 25, 50],
    ],    
    [
        ["Proven Expert"],
        [225, 425, 625],
        [5, 10, 25],
    ],    
]

$(".price-img-box div").click(function () {
    $(".price-img-box div").removeClass("active")
    $(this).addClass("active");
    let index = $(this).index()

    $(".pack-name span").text(price[index][0]);

    $(".pack-price span").each(function (i) {
        $(this).text(price[index][1][i])
    });

    $(".pack-price span").each(function (i) {
        $(this).text(price[index][s][i])
    });

})

$(".select-pc").change(function () {
    $(".price-img-box div").removeClass("active")
    $(this).addClass("active");
    let index = $(".select-pc option").filter(":selected").val()

    $(".pack-name span").text(price[index][0]);

    $(".pack-price span").each(function (i) {
        $(this).text(price[index][1][i])
    });

    $(".pack-price span").each(function (i) {
        $(this).text(price[index][s][i])
    });

})


function zuruck(e) {
    window.history.back();
}


$(".pselectOpen").click(function (e) {
    $(".pselect-main").toggleClass("active")
})


$(document).on('click', function (e) {
    if ($(e.target).closest(".pselect-main").length === 0) {
        $(".pselect-main").removeClass("active")
    }
});


$(".bew-label").click(function () {
    checkEl = $(".bew-label").find("input:checked").next().next().text();

    let pselectArr = checkEl.split("Bewertung")
    
    const arr = pselectArr.splice(-1)
    
    let diz = pselectArr.map(function (el) {
        return " " + el + "Bewertung"
    })
    console.log(diz);

    $(".pselectOpen").text(diz.toString())
})