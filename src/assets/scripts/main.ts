import $ from 'jquery'
import Bubble from './module/bubble'
import Modal from './module/modal'
import NotifyIcon from './module/notifyIcon'
import Menu from './module/menu'
import Scroll from './module/scroll'
import Wine from './module/wine'

$(() => {
  new Bubble()
  new NotifyIcon()
  new Menu()
  new Modal()
  new Scroll()
  new Wine()
})
