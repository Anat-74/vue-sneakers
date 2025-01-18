import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue';
import Favorites from '@/pages/Favorites.vue';
import Orders from '@/pages/Orders.vue';
import SneakersForMan from '@/pages/SneakersForMan.vue';
import SneakersForChildren from '@/pages/SneakersForChildren.vue';
import SneakersForChildrenWooman from '@/pages/SneakersForChildrenWooman.vue';
import SneakersWooman from '@/pages/SneakersWooman.vue';
import LacesAccessories from '@/pages/LacesAccessories.vue';
import InsolesAccessories from '@/pages/InsolesAccessories.vue';
import Cream from '@/pages/Cream.vue';

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
      path: '/orders',
      name: 'Orders',
      component: Orders
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
   {
      path: '/sneakers-children-wooman',
      name: 'SneakersForChildrenWooman',
      component: SneakersForChildrenWooman
   },
   {
      path: '/sneakers-wooman',
      name: 'SneakersWooman',
      component: SneakersWooman
   },
   {
      path: '/laces-accessories',
      name: 'LacesAccessories',
      component: LacesAccessories
   },
   {
      path: '/insoles-accessories',
      name: 'InsolesAccessories',
      component: InsolesAccessories
   },
   {
      path: '/Cream',
      name: 'Cream',
      component: Cream
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router