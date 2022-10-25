import $ from 'jquery'

const menu = $('.js-menu')
const menuItem = $('.js-menuitem')
const ham = $('.js-hamburger')
const body = $('body')

export default class Menu {
  constructor() {
    this.bind()
  }
  bind() {
    this.openMenu()
    this.selectMenuItem()
  }
  openMenu() {
    ham.on('click', () => {
      if (ham.hasClass('is-open')) {
        this.removeClass()
        return
      }
      this.addClass()
    })
  }
  selectMenuItem() {
    menuItem.on('click', async () => {
      await this.removeClass()
    })
  }
  addClass() {
    ham.addClass('is-open')
    menu.addClass('is-open')
    body.addClass('is-fixed')
  }
  removeClass() {
    ham.removeClass('is-open')
    menu.removeClass('is-open')
    body.removeClass('is-fixed')
  }
}
