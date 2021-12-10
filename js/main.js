// scroll
$("[data-scroll]").on('click', function(event){
    event.preventDefault();
     
    let elemid = $(this).data('scroll');
    let elemOffset = $(elemid).offset().top;
    $('html,body').animate({
        scrollTop: elemOffset - 150
    });

});

$("[data-Top]").on('click', function(event){
    event.preventDefault();
     
    //let elemid = $(this).data('scroll');
    //let elemOffset = $(elemid).offset().top;
    $('html,body').animate({
        scrollTop: 0
    });

});

// fixed  header
window.onscroll = function(){
    let header = document.getElementById('header');
    if(window.pageYOffset > 400){
        header.classList.add('fixed')
    } else{
        header.classList.remove('fixed')
    }
}




// carousel
$(document).ready(function(){
    const owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 20
    

    });
  });

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.res-menu');
burger.addEventListener('click', function(){
    menu.classList.toggle('show');

});


