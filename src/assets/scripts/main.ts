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

$(() => {
  const stopAt = $('.js-wine-stop')
  const wine = $('.js-wine')
  const wineHeight: number = wine.outerHeight() // バナーの高さ
  const distanceFromWineTop: number = wine.offset().top //画面上端からバナー上端までの距離
  const positonByWine: number = wineHeight + distanceFromWineTop // バナーの下端の位置

  function toggle() {
    // stopクラス付け外しの処理
    const scrollTopWindow: number = $(window).scrollTop()
    const border: number = stopAt.offset().top + stopAt.outerHeight()

    if (scrollTopWindow + positonByWine >= border) {
      // スクロール量とバナーの下端が停止位置に達した場合の処理
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

  $(window).on('scroll', toggle)
})
