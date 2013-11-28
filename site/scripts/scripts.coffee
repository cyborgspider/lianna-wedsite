$ ->
  $('#logo').click ->
    window.location.href = "index.html"

  $('.meal').tooltip()
    # position:  
    #   my: "left+15 center"
    #   at: "right center" 
    # )

  $('.meal').click ->
    $(@).addClass 'chosen'
    $(@).siblings().removeClass 'chosen'

