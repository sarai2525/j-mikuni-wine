/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import $ from 'jquery'
$(() => {
  //クリックで動く
  $('.js-open-answer').click(function () {
    $('.js-answer').slideToggle('active')
  })
})
