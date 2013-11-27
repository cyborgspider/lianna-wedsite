(function() {
  $(function() {
    $('.meal').tooltip();
    return $('.meal').click(function() {
      $(this).addClass('chosen');
      return $(this).siblings().removeClass('chosen');
    });
  });

}).call(this);
