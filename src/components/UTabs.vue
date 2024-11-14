<script setup>
import UButton from '@/components/UButton.vue'
   defineProps({
   tabs: {
      type: Array,
      required: true
   },
   selectedTab: {
      type: String,
      required: false
   }
})
const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
   emit('changeTab', tabName)
}
</script>

<template>
   <div class="tab">
      <div class="tab__buttons">
         <UButton
            v-for="tab in tabs"
             @click="clickOnTab(tab.name)"
             :key="tab.name"
             :class="['tab__btn', {'tab__btn_selected': tab.name === selectedTab}]"
             tab="tab" 
            > {{ tab.label }}
         </UButton>
      </div>
   <div class="tab__content">
      <slot />
      </div>
   </div>
   </template>

<style lang="scss" scoped>
  .tab {
   @media (min-width:$tablet){
   display: flex;
   flex-direction: row-reverse;
   align-items: start;
   }

   &__buttons {
      @include adaptiveValue("row-gap", 12, 7);
      display: grid;
      @media (min-width:$tablet){
         margin-inline-start: toRem(16);
      }

      @media (max-width:$tablet){
         @include adaptiveValue("column-gap", 24, 12);
         grid-template-columns: repeat(auto-fit, minmax(toRem(118), 1fr));
      }
   }

      &__btn {
         @media (max-width:$tablet){
            width: 100%;
            font-weight: 500;
         }

        &_selected {
          background-color: var(--danger-color) !important;
         }
      }

      &__content {
         padding-block-start: 5px;
         font-size: toRem(18);
         font-weight: 500;
         letter-spacing: 1.2px;
    }
  }
  </style>