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
         v-for="tabs in tm('tabsFooter')"
         :key="tabs"
      >
      <div class="tab__buttons">
         <UButton
         v-for="btn in tabs.tabsBtn"
         :key="btn.label"
         @click="activeTab = btn.id"
         :activeTab="activeTab === btn.id"
         tab="tab" 
         > {{ rt(btn.label) }}
         </UButton>
      </div>
         <p
         v-for="content in tabs.tabsContent"
         :key="content.content"
         v-show="activeTab === content.id"
         class="tab__content"
         >{{ rt(content.content) }}</p>
      </template>
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
      @include adaptiveValue("row-gap", 12, 8);
      display: inline-flex;
      flex-direction: column;

      @media (min-width:$tablet){
         margin-inline-start: toRem(16);
      }

      @media (max-width:$tablet){
         position: absolute;
         right: 0;
         margin-block-end: toEm(12, 15)
      }
   }

      &__content {
         @include adaptiveValue("font-size",18 , 16);
         font-weight: 500;
         letter-spacing: 1px;
         backdrop-filter: blur(4px);
         color: var(--text-color);

         @media (max-width:$tablet){
            @include adaptiveValue("top", 207, 154);
            position: relative;
         }
    }
  }
  </style>