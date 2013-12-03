$ ->
  $('#logo').click ->
    window.location.href = "index.html"

  $('.meal').tooltip({html:true})

  $('#number').blur ->
    num = $(@).val()
    rows = $('.bot-form .row').length
    if rows < num
      while num -= 1
        row = $('.bot-form .row:first').clone()
        row.find('.guestName').attr('name', (i, a) -> return a + num)
        row.find('.mealChoice').attr('name', (i, a) -> return a + num)
        row.appendTo '.bot-form'
    else if rows > num
      $(".bot-form .row:nth-child(#{num})").nextUntil().remove() #fuck coffeescript

  $('.meal').click ->
    $(@).addClass 'chosen'
    $(@).siblings().removeClass 'chosen'

