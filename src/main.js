import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { i18n } from "@/i18n/index";

import App from './App.vue'
import router from '@/router/router';

import { useI18n } from 'vue-i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faMagnifyingGlass, faAnglesLeft, faCartShopping, faRubleSign, faChevronRight, faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser, faHandPointer, faComments } from '@fortawesome/free-regular-svg-icons'
import { faTelegram, faViber, faInstagram, faVk, faOpencart } from '@fortawesome/free-brands-svg-icons'
library.add([faComments, faPhone, faHandPointer, faMagnifyingGlass, faTelegram, faViber, faInstagram, faVk, faHouse,  faHeart, faUser, faAnglesLeft, faCartShopping, faOpencart, faRubleSign, faHeart, faChevronRight, faArrowLeft ])

const pinia = createPinia()

const app = createApp(App,{
   setup() {
      const {t, rt, tm} = useI18n()
      return {t, rt, tm}
      }
   }
)

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(i18n)
.use(autoAnimatePlugin)
.use(router)
.use(pinia)
.mount('#app')