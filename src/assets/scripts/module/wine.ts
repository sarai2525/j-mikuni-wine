/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import $ from 'jquery'
const isMobileWidth = $(window).width() < 768

export default class Wine {
  constructor() {
    this.bind()
  }
  bind() {
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
      const kvArea = $('.js-wine-opacity').offset().top
      const kv = $('.js-kv-area')
      if (isMobileWidth) {
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
  }
}
