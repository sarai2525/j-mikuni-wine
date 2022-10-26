import $ from 'jquery'
const jsBubble = '.js-bubble'

export default class Bubble {
  constructor() {
    this.bind()
  }

  bind() {
    $(`${jsBubble}-01`).hover(
      () => {
        $(`${jsBubble}-01`).addClass('is-hover')
      },
      () => {
        $(`${jsBubble}-01`).removeClass('is-hover')
      }
    )
    $(`${jsBubble}-02`).hover(
      () => {
        $(`${jsBubble}-02`).addClass('is-hover')
      },
      () => {
        $(`${jsBubble}-02`).removeClass('is-hover')
      }
    )
    $(`${jsBubble}-03`).hover(
      () => {
        $(`${jsBubble}-03`).addClass('is-hover')
      },
      () => {
        $(`${jsBubble}-03`).removeClass('is-hover')
      }
    )
    $(`${jsBubble}-04`).hover(
      () => {
        $(`${jsBubble}-04`).addClass('is-hover')
      },
      () => {
        $(`${jsBubble}-04`).removeClass('is-hover')
      }
    )
    $(`${jsBubble}-05`).hover(
      () => {
        $(`${jsBubble}-05`).addClass('is-hover')
      },
      () => {
        $(`${jsBubble}-05`).removeClass('is-hover')
      }
    )
  }
}
