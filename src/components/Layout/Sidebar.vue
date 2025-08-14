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
   <div class="sidebar__body">
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
      </div>
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
      scrollbar-color: var(--whitesmoke-color) transparent;
      height: 100dvh;
      overflow-y: auto;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      transition: left .6s;
      @include adaptiveValue("padding-inline", 22, 12);
      @include adaptiveValue("padding-block-start", 18, 9);

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

      &__body {
      height: 100%;
      display: flex;
      flex-direction: column;
      @include adaptiveValue("row-gap", 25, 14);

      @media (min-width:$tablet){
         width: toRem(245);
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
         visibility: hidden;
         opacity: 0;
          position: absolute;
          top: 50%;
          left: toRem(-4);
          transform: translateY(-50%);
          color: var(--warning-color);

         @media (max-width:$tablet){
            visibility: visible;
            opacity: 1;
         }
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
      @include adaptiveValue("padding-block-end", 18, 9);
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