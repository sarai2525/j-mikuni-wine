import $ from 'jquery'
import 'remodal'

$(document).on('click', '.js-open-answer', () => {
  $('.js-answer').slideToggle('active')
})

$(document).on('closed', '.remodal', () => {
  $('.js-answer').hide()
})
$(document).on('click', '.js-quiz-area', () => {
  $('.js-icon').hide()
})
