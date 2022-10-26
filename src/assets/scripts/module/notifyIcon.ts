import $ from 'jquery'
const target = $('.js-icon')
const quizArea = '.js-quiz-area'
export default class NotifyIcon {
  constructor() {
    this.bind()
  }
  bind() {
    $(document).on('click', quizArea, () => {
      target.hide()
    })
  }
}
