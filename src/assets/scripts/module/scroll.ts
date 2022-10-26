/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import $ from 'jquery'

const ua = navigator.userAgent
const isMobile = ua.indexOf('iPhone') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
const breakPointSp = 768

export default class Scroll {
  constructor() {
    this.bind()
    this.isSp = 'isSp'
    this.isPc = 'isPC'
  }

  bind() {
    $('a[href^="#"]').on('click', function () {
      const speed = 300
      const href = $(this).attr('href')
      const target = $(href === '#' || href === '' ? 'html' : href)
      const position = target.offset().top
      $('html, body').animate({ scrollTop: position }, speed, 'swing')
      if (this.resize === this.isSp) {
        return
      }
      return false
    })
  }
  resize() {
    $(window).on('resize', () => {
      const windowSize = $(window).width()
      if (windowSize < breakPointSp) {
        return this.isSp
      } else {
        return this.isPc
      }
    })
  }
}
