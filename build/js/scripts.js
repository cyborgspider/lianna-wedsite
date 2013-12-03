(function() {
  $(function() {
    if ($("li a[href='" + (location.pathname.slice(1)) + "']").length) {
      $("li a[href='" + (location.pathname.slice(1)) + "']").addClass('active');
    }
    $('#logo').click(function() {
      return window.location.href = "/";
    });
    if ($('.meal').length) {
      $('.meal').tooltip({
        html: true
      });
    }
    $('#number').blur(function() {
      var first, num, row, rows, _results;
      num = $(this).val();
      rows = $('.bot-form .row').length;
      first = $('.bot-form .row:first');
      if (rows < num) {
        _results = [];
        while (num -= 1) {
          row = first.clone();
          row.find('.guestName').attr('name', function(i, a) {
            return a.replace("[0]", "[" + num + "]");
          }).val('');
          row.find('.meal').removeClass('chosen');
          row.find('.mealChoice').attr('name', function(i, a) {
            return a.replace("[0]", "[" + num + "]");
          }).val('');
          _results.push(first.after(row));
        }
        return _results;
      } else if (rows > num) {
        return $(".bot-form .row:nth-child(" + num + ")").nextUntil().remove();
      }
    });
    return $('.bot-form').on('click', '.meal', function() {
      $(this).parent().siblings('.mealChoice').val($(this).data('meal'));
      $(this).addClass('chosen');
      return $(this).siblings().removeClass('chosen');
    });
  });

}).call(this);
