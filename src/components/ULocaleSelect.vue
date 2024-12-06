<script setup>
import { useI18n } from 'vue-i18n'
import { allLocales, setLocale } from "@/i18n/index";

const { locale } = useI18n({
   useScope: 'global'
})
</script>

<template>
   <div class="locale">
   <select 
   @change="setLocale($event.target.value)"
   :value="locale"
   class="locale__select"
   >
     <option 
     v-for="locale in allLocales"
     :key="locale"
     :value="locale"
     class="locale__option"
     >
     {{ locale }}</option>
   </select>
</div>
 </template>
 
 <style lang="scss" scoped>
 .locale {
   position: relative;

&::before,
   &::after{
      content: '';
      pointer-events: none;
      position: absolute;
      top: toRem(11);
      width: toRem(6);
      height: toRem(2);
      background-color: var(--tab-hover);
   }
   &::before {
      right: toRem(9);
      transform: rotate(-125deg);
   }
   &::after {
      right: toRem(6);
      transform: rotate(125deg);
   }
   &__select {
      width: toRem(42);
      padding-inline: toRem(4);
      padding-block: toRem(3);
      border: 2px solid var(--blue-color);
      border-radius: toEm(16, 15);
      outline: none;
      appearance: none;
      cursor: pointer;
      color: var(--tab-color);
      text-transform: uppercase;
   }
 }

 </style>
 