jQuery(function ($) {
  $('.section-header').click(function() {
    $(this).parent().find('.section-content').slideToggle();
  });
});
