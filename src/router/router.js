import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue';
import Favorites from '@/pages/Favorites.vue';
import Profile from '@/pages/Profile.vue'
import AboutUs from '@/pages/AboutUs.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
   },
   {
      path: '/profile',
      name: 'Profile',
      component: Profile
   },
   {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router