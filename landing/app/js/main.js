$(function(){
    
    $('.clients-list').slick({
        
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        centerPadding: '30px',
        slidesToShow: 1,

    });
   $('.header-btn').click(function(e){
       e.preventDefault();
       $('.header').toggleClass('header-active');
       //$('.header-menu-mobile').slideDown();
   })


  
});