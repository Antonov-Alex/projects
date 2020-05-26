var time = 2, cc = 1;
$(window).scroll(function(){
  $('.about-counter').each(function(){
      var
      counterPosition = $(this).offset().top,
      topWindow = $(window).scrollTop();
       if(counterPosition < topWindow + 200) {
           
          if (cc < 2)  {
           $('.num').addClass('vis');
           $('p').each(function(){
           var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function(){
                if(i <= num) {
                    that.html(i);
                }
                else{
                    clearInterval(int);
                    cc = cc + 2;
                }
                i++;
            }, step);
          });
        }
       }   
  });
});
