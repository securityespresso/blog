jQuery(function ($) {
  $('.section-header').click(function() {
    var $this = $(this);
    $this.toggleClass('expanded');
    $this.parent().find('.section-content').slideToggle();
  });

  $(".enroll-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#enroll").offset().top
    }, 300);
  });
});
