import $ from 'jquery'
import 'remodal'
const target = '.js-open-answer'
const modal = '.remodal'
const toggledArea = $('.js-answer')

export default class Modal {
  constructor() {
    this.bind()
  }
  bind() {
    $(document).on('click', target, () => {
      toggledArea.slideToggle('active')
    })
    $(document).on('closed', modal, () => {
      toggledArea.hide()
    })
  }
}
