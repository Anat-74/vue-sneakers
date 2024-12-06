<script setup>
import { inject } from 'vue';

import UButton from '@/components/UButton.vue'
import UAccordion from '@/components/Accordion/UAccordion.vue';

import UAnimateTitle from '@/components/UAnimateTitle.vue';
import ULocaleSelect from '@/components/ULocaleSelect.vue';
const { isOpenMenu, toggleMenu } = inject('toggle')
</script>

<template>
<aside :class="['sidebar', {sidebar_isopen: isOpenMenu}]">
   <UAnimateTitle class="sidebar__animate-title" />
   <slot />
   <UAccordion class="sidebar__accordion" />
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
   @include adaptiveValue("padding-block-start", 12, 10);
   @include adaptiveValue("padding-block-end", 40, 20);
      height: 100dvh;
      position: relative;
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
         position: absolute;
         top: toRem(11);
         right: toRem(12);
      }

      &__accordion {
         align-self: center;
   }

   &__locale {
      justify-self: start;
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