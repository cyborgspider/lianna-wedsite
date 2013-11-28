$ ->
  $('#logo').click ->
    window.location.href = "index.html"

  $('.meal').tooltip({html:true})


  $('.meal').click ->
    $(@).addClass 'chosen'
    $(@).siblings().removeClass 'chosen'

