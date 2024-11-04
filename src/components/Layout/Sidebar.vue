<script setup>
import { inject, ref } from 'vue';
import UButton from '@/components/UButton.vue'
const { isOpenMenu, toggleMenu } = inject('toggle')

const links = ref([
{name: 'Product-1', href: '/product-1'},
{name: 'Product-2', href: '/product-2'},
{name: 'Product-3', href: '/product-3'},
{name: 'Product-4', href: '/product-4'}
])
</script>

<template>
<aside :class="['sidebar', {sidebar_isopen: isOpenMenu}]">
   <slot />
   <ul class="sidebar__list">
         <li
         v-for="link in links"
         :key="link.name"
         class="sidebar__item"
         >
         <router-link 
         :to="link.href"
         >
         {{ link.name }}
         </router-link>
         </li>
      </ul>
   </aside>
   <UButton
      @click="toggleMenu" 
      :isOpenMenu="isOpenMenu"
      class="toggle"
      icon="angles-left"
      toggle="toggle"
      />
</template>

<style lang="scss" scoped>
.sidebar {
   @include adaptiveValue("left", 0, 0);
   @include adaptiveValue("width", 320, 245 );
   @include adaptiveValue("padding-inline", 30, 8);
   @include adaptiveValue("padding-block-start", 12, 10);
   @include adaptiveValue("padding-block-end", 40, 20);
      min-height: 100dvh;
      display: grid;
      grid-template-rows: auto 1fr;
      position: fixed;
      z-index: 10;
      top: 0;
      transition: left .6s;

      @media (max-width:$tablet){
      @include adaptiveValue("left", -270, -225);
      @include adaptiveValue("width", 270, 225 );
      transition: left .2s;
   }

      &_isopen {
         left: toRem(-320);
         @media (max-width:$tablet){
            left: 0;
         }
      }

      &__list {
         justify-items: center;
         align-self: center;
         display: grid;
         row-gap: toRem(25);
      }
}

.toggle {
      position: fixed;
      z-index: 100;

      @media (min-width:$tablet){
      height: 100vh;
      width: toRem(24);
      top: 0;
      left: 0;
      }

   @media (max-width:$tablet){
      top: 50%;
      // transform: translateY(-50%);
      right: toRem(7);
   }
   }
</style>