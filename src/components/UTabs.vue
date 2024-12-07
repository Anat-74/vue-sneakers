<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import UButton from '@/components/UButton.vue'

const { rt, tm } = useI18n({
   useScope: 'global'
})

const activeTab = ref(4)

</script>

<template>
   <div class="tab">

      <template
         v-for="tab in tm('tabsFooter')"
         :key="tab.id"
      >
      <div class="tab__buttons">
         <UButton
         @click="activeTab = tab.id"
         :class="['tab__btn', {'tab__btn_active': activeTab === tab.id}]"
         tab="tab" 
         > {{ rt(tab.label) }}
         </UButton>
      </div>
         <p
         v-show="activeTab === tab.id"
         class="tab__content"
         >{{ rt(tab.content) }}</p>
      </template>
   </div>
</template>

<style lang="scss" scoped>
  .tab {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
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

        &_active {
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