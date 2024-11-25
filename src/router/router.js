import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue';
import Favorites from '@/pages/Favorites.vue';
import Profile from '@/pages/Orders.vue'
import AboutUs from '@/pages/AboutUs.vue'
import SneakersForMan from '@/pages/SneakersForMan.vue';
import SneakersForChildren from '@/pages/SneakersForChildren.vue';

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
   {
      path: '/sneakers-man',
      name: 'SneakersForMan',
      component: SneakersForMan
   },
   {
      path: '/sneakers-children',
      name: 'SneakersForChildren',
      component: SneakersForChildren
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router