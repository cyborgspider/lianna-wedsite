(function() {
  $(function() {
    var validate;
    validate = function() {
      var errors, isValid, mealError;
      mealError = false;
      isValid = true;
      $('.error-message').html('');
      $('.validate').each(function() {
        if (!$(this).val()) {
          $(this).addClass('error').on('focus', function() {
            return $(this).removeClass('error');
          });
          isValid = false;
          if ($(this).hasClass('mealChoice')) {
            return mealError = true;
          }
        }
      });
      errors = $('input.error:not(.mealChoice)').length;
      if (errors) {
        $('.error-message').removeClass('dn').append('Please fill out the missing field' + (errors > 1 ? 's' : '' + '.'));
      }
      if (mealError) {
        $('.error-message').removeClass('dn').append('<br />Please indicate a meal choice.');
      }
      return isValid;
    };
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
    $('.bot-form').on('click', '.meal', function() {
      $(this).parent().siblings('.mealChoice').val($(this).data('meal'));
      $(this).addClass('chosen');
      return $(this).siblings().removeClass('chosen');
    });
    return $('.btn-submit').on('click', function(e) {
      e.preventDefault();
      if (validate()) {
        return $('#rsvp-form').submit();
      }
    });
  });

}).call(this);
