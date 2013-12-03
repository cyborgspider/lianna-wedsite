$ ->
  validate = () ->
    mealError = false
    isValid = true
    $('.error-message').html ''
    $('.validate').each ->
      if !$(@).val()
        $(@).addClass('error').on 'focus', () -> $(@).removeClass 'error'
        isValid = false
        mealError = true if $(@).hasClass 'mealChoice'
    errors = $('input.error:not(.mealChoice)').length
    if errors
      $('.error-message').removeClass('dn').append 'Please fill out the missing field' + if errors > 1 then 's' else '' + '.'
    if mealError
      $('.error-message').removeClass('dn').append '<br />Please indicate a meal choice.'
    return isValid

  $("li a[href='#{location.pathname.slice(1)}']").addClass('active') if $("li a[href='#{location.pathname.slice(1)}']").length

  $('#logo').click ->
    window.location.href = "/"

  $('.meal').tooltip({html:true}) if $('.meal').length

  $('#number').blur ->
    num = $(@).val()
    rows = $('.bot-form .row').length
    first = $('.bot-form .row:first')
    if rows < num
      while num -= 1
        row = first.clone()
        row.find('.guestName').attr('name', (i, a) -> return a.replace("[0]", "[#{num}]")).val ''
        row.find('.meal').removeClass 'chosen'
        row.find('.mealChoice').attr('name', (i, a) -> return a.replace("[0]", "[#{num}]")).val ''
        first.after row
    else if rows > num
      $(".bot-form .row:nth-child(#{num})").nextUntil().remove()

  $('.bot-form').on 'click', '.meal', () ->
    $(@).parent().siblings('.mealChoice').val $(@).data 'meal'
    $(@).addClass 'chosen'
    $(@).siblings().removeClass 'chosen'

  $('.btn-submit').on 'click', (e) ->
    e.preventDefault()
    $('#rsvp-form').submit() if validate()
