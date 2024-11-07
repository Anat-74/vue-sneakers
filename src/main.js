import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/router';
const pinia = createPinia()
const app = createApp(App);

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faMagnifyingGlass, faAnglesLeft, faCartShopping, faRubleSign, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTelegram, faViber, faInstagram, faVk, faOpencart } from '@fortawesome/free-brands-svg-icons'

library.add([ faMagnifyingGlass, faTelegram, faViber, faInstagram, faVk, faHouse,  faHeart, faUser, faAnglesLeft, faCartShopping, faOpencart, faRubleSign, faHeart, faChevronRight ])

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(autoAnimatePlugin)
.use(router)
.use(pinia)
.mount('#app')