<script setup>
import { inject } from 'vue';

import UButton from '@/components/UButton.vue'
import UCardSidebar from '@/components/UCardSidebar.vue';
import UAccordion from '@/components/UAccordion.vue';
import USocial from '@/components/USocial.vue';

import UAnimateTitle from '@/components/UAnimateTitle.vue';
import ULocaleSelect from '@/components/ULocaleSelect.vue';
const { isOpenMenu, toggleMenu } = inject('toggle')
</script>

<template>
<aside :class="['sidebar', {sidebar_isopen: isOpenMenu}]">
   <slot />
   <UAnimateTitle class="sidebar__animate-title" />
   <div class="sidebar__phone">
      <font-awesome-icon icon="fa-solid fa-phone" />
         <a href="tel:+3739940551">+373(79)405-51-67</a>
         <a href="tel:+3739940551">+373(99)305-51-68</a>
   </div>
   <UAccordion class="sidebar__accordion" />
   <UCardSidebar class="sidebar__card" />
   <USocial class="sidebar__social" />
   <ULocaleSelect class="sidebar__locale" />
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
   @include adaptiveValue("width", 300, 245 );
   @include adaptiveValue("padding-inline", 16, 9);
   @include adaptiveValue("padding-block", 18, 12);
   @include adaptiveValue("row-gap", 25, 14);
      scrollbar-color: var(--whitesmoke-color) transparent;
      height: 100dvh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      transition: left .6s;

      @media (min-width:$tablet){
          margin-inline-start: toRem(24); 
      }

      @media (max-width:$tablet){
      @include adaptiveValue("left", -270, -205);
      @include adaptiveValue("width", 270, 205 );
      transition: left .2s;
   }

      &_isopen {
         left: toRem(-320);
         @media (max-width:$tablet){
            left: 0;
         }
      }

      &__animate-title {
         @include adaptiveValue("top", 15, 12);
         position: absolute;
         right: toRem(12);
      }

      &__phone {
         @include adaptiveValue("font-size", 22, 16);
         --background-color: transparent;
         overflow: visible;
         white-space: nowrap;
         position: relative;
         display: grid;
         justify-items: center;
         row-gap: toRem(5);
         margin-block-end: toRem(16);

         svg {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          color: var(--warning-color);
           }

         a {
            color: var(--turquoise-color);
      }
   }

      &__accordion {
         flex: 1 1 auto;
   }

   &__card {
      --background-color: transparent;
      @include adaptiveValue("margin-block-end", 9, 44);
   }

   &__social {
      display: flex;
      justify-content: space-between;
   }

   &__locale {
      align-self: start;
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
      transform: translateY(-50%);
      right: toRem(7);
   }
   }
</style>