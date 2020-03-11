import DefaultLayout from '~/layouts/Default.vue'

import { NavPlugin, NavbarPlugin, FormPlugin, FormGroupPlugin, FormInputPlugin, FormTextareaPlugin, ButtonPlugin } from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(NavPlugin)
  Vue.use(NavbarPlugin)
  Vue.use(FormPlugin)
  Vue.use(FormGroupPlugin)
  Vue.use(FormInputPlugin)
  Vue.use(FormTextareaPlugin)
  Vue.use(ButtonPlugin)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
