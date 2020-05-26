$(document).ready(function () {
   
    $('.dropdown-pannel-hidding').click(function (e) {
        e.preventDefault();
        
        $(this).toggleClass('in').next().slideToggle();
        $('.dropdown-pannel-hidding').not(this).removeClass('in').next().slideUp();
    })
});