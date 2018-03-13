$(document).ready(function() {

  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  var flag = true;

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
  $(".mdl-button").click(function() {
    window.location = 'Rohan - main - Copy.pdf';
  });

  $('.myTab a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });


  //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // to move the progressbar

/*
  $('.progress-bar').each(function() {
    var bar_value = $(this).attr('aria-valuenow') + '%';
    $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
  });*/




});
