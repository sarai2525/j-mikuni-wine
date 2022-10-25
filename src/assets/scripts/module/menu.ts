import $ from 'jquery'
const menu = $('.js-menu')
const ham = $('.js-hamburger')
const body = $('body')

export default class Menu {
  constructor() {
    this.bind()
  }
  bind() {
    ham.on('click', () => {
      if (ham.hasClass('is-open')) {
        ham.removeClass('is-open')
        menu.removeClass('is-open')
        body.removeClass('is-fixed')
        return
      }
      ham.addClass('is-open')
      menu.addClass('is-open')
      body.addClass('is-fixed')
    })
  }
}
