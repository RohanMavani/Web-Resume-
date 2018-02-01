$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $('#return-to-top').fadeIn();
    } else {
      $('#return-to-top').fadeOut();
    }
  });

  $('#return-to-top').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, $(window).height());
    return false;
  });


  // to add animation on the hobby parts

  $(".allinterests").hover(
    function() {
      $(this).find("span").addClass("anim");
      $(this).find("i").addClass("anim");
    },
    function() {
      $(this).find("span").removeClass("anim");
      $(this).find("i").removeClass("anim");
    });


    // Downloadble button
    $(".mdl-button").click(function(){
      window.location = 'Rohan - main - Copy.pdf';
    });

});
