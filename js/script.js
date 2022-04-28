$(window).scroll(function() {
    if ($(this).scrollTop() > 10){
        $('header').addClass("header__filled"); 
         }
        else{
        $('header').removeClass("header__filled");         }
});

$(document).ready(function() {
    var headerOffset = document.querySelector(".header").clientHeight;
    $("a.scrollto").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - headerOffset}, 400);
      return false;
    });
  });