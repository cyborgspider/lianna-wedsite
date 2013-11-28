(function() {
  $(function() {
    $('#logo').click(function() {
      return window.location.href = "index.html";
    });
    $('.meal').tooltip();
    return $('.meal').click(function() {
      $(this).addClass('chosen');
      return $(this).siblings().removeClass('chosen');
    });
  });

}).call(this);
