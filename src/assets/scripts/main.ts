/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import $ from 'jquery'
import Bubble from './module/bubble'
import Modal from './module/modal'
import NotifyIcon from './module/notifyIcon'
import Menu from './module/menu'
import Scroll from './module/scroll'

const ua = navigator.userAgent
const isMobile = ua.indexOf('iPhone') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)

$(() => {
  if (isMobile) {
    new NotifyIcon()
    new Menu()
  }
  new Bubble()
  new Modal()
  new Scroll()

  $(window).on('scroll', toggle)
  const stopAt = $('.js-wine-stop')
  const wine = $('.js-wine')
  const wineHeight = wine.outerHeight() // ワインの高さ
  const distanceFromWineTop = wine.offset().top //画面上端からワイン上端までの距離
  const positonByWine = wineHeight + distanceFromWineTop // ワインの下端の位置
  function toggle() {
    // stopクラス付け外しの処理
    const scrollTopWindow = $(window).scrollTop()
    const border = stopAt.offset().top + stopAt.outerHeight()
    if (isMobile) {
      const kvArea = $('.js-wine-opacity').offset().top
      const kv = $('.js-kv-area')
      if (scrollTopWindow + positonByWine >= kvArea) {
        kv.addClass('is-opacity')
        kv.removeClass('is-clearly')
        wine.addClass('is-opacity')
        wine.removeClass('is-clearly')
      }
      if (scrollTopWindow < 1) {
        if (wine.hasClass('is-opacity')) {
          kv.addClass('is-clearly')
          kv.removeClass('is-opacity')
          wine.addClass('is-clearly')
          wine.removeClass('is-opacity')
        }
      }
    }
    // スクロール量とワインの下端が停止位置に達した場合の処理
    if (scrollTopWindow + positonByWine >= border) {
      if (!stopAt.hasClass('is-stop')) {
        stopAt.addClass('is-stop')
      }
    } else {
      // 再びフローティングに戻す処理
      if (stopAt.hasClass('is-stop')) {
        stopAt.removeClass('is-stop')
      }
    }
  }
})
