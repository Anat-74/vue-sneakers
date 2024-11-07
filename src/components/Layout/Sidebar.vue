<script setup>
import { inject, ref } from 'vue';
import UButton from '@/components/UButton.vue'
import UAccordion from '@/components/Accordion/UAccordion.vue';
const { isOpenMenu, toggleMenu } = inject('toggle')

// const links = ref([
// {name: 'Product-1', href: '/product-1'},
// { name: 'Product-2', href: '/product-2' }
// ])
</script>

<template>
<aside :class="['sidebar', {sidebar_isopen: isOpenMenu}]">
   <slot />
   <UAccordion class="sidebar__accordion" />
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
   @include adaptiveValue("width", 320, 245 );
   @include adaptiveValue("padding-inline", 16, 9);
   @include adaptiveValue("padding-block-start", 12, 10);
   @include adaptiveValue("padding-block-end", 40, 20);
      height: 100dvh;
      overflow-y: auto;
      display: grid;
      grid-template-rows: auto  1fr;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      transition: left .6s;

      @media (min-width:$tablet){
          margin-inline-start: toRem(24); 
      }

      @media (max-width:$tablet){
      @include adaptiveValue("left", -270, -255);
      @include adaptiveValue("width", 270, 255 );
      transition: left .2s;
   }

      &_isopen {
         left: toRem(-320);
         @media (max-width:$tablet){
            left: 0;
         }
      }

      &__accordion {
         align-self: center;
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