(function() {
  $(function() {
    $('#logo').click(function() {
      return window.location.href = "index.html";
    });
    $('.meal').tooltip({
      html: true
    });
    $('#number').blur(function() {
      var num, row, rows, _results;
      num = $(this).val();
      rows = $('.bot-form .row').length;
      if (rows < num) {
        _results = [];
        while (num -= 1) {
          row = $('.bot-form .row:first').clone();
          row.find('.guestName').attr('name', function(i, a) {
            return a + num;
          });
          row.find('.mealChoice').attr('name', function(i, a) {
            return a + num;
          });
          _results.push(row.appendTo('.bot-form'));
        }
        return _results;
      } else if (rows > num) {
        return $(".bot-form .row:nth-child(" + num + ")").nextUntil().remove();
      }
    });
    return $('.meal').click(function() {
      $(this).addClass('chosen');
      return $(this).siblings().removeClass('chosen');
    });
  });

}).call(this);
