<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import UButton from '@/components/UButton.vue'

const { rt, tm, } = useI18n({
   useScope: 'global'
})
//    defineProps({
//    tabs: {
//       type: Array,
//       required: true
//    },
//    selectedTab: {
//       type: String,
//       required: false
//    }
// })
// const emit = defineEmits(['changeTab'])

// const clickOnTab = (tabName) => {
//    emit('changeTab', tabName)
// }

// const tabs = [
// {name: 'AboutUs', label: 'О нас'},
// {name: 'Services', label: 'Наши услуги'},
// {name: 'News', label: 'Новости'},
// {name: 'Contacts', label: 'Контакты'}
// ]
const selectedTab = ref('Contacts')

const changeTab = (tabName) => {
   selectedTab.value = tabName
}
</script>

<template>

   <div class="tab">


      <div class="tab__buttons">
         <template
         v-for="tabs in tm('tabsFooter')"
         :key="tabs.name"
      >
         <UButton
               @click="changeTab(tabs.name)"
             :class="['tab__btn', {'tab__btn_selected': tabs.name === selectedTab}]"
             tab="tab" 
            > {{ rt(tabs.label) }}
         </UButton>
      </template>
      </div>

   <div class="tab__content">
   <p v-if="selectedTab === 'AboutUs'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit sit, minima consequatur repellat cupiditate accusamus fugiat eos, beatae perferendis dignissimos rem quo iure quam ab expedita nemo, ratione illo? Veritatis, nisi amet a in repellendus recusandae nemo tempore beatae, dolorum eos voluptates distinctio optio non cum dolore dolor, aperiam unde inventore. Provident, quibusdam. A.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit sit, minima consequatur repellat cupiditate accusamus fugiat eos, beatae perferendis dignissimos rem quo iure quam ab expedita nemo, ratione illo? Veritatis, nisi amet a in repellendus recusandae nemo tempore beatae, dolorum eos voluptates distinctio optio non cum dolore dolor, aperiam unde inventore. Provident, quibusdam. A.</p>
   <p v-if="selectedTab === 'Services'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi rerum corporis vitae reprehenderit tempora, odit temporibus nostrum accusantium quisquam iusto laborum sed incidunt alias et minima tempore officia. Nesciunt nisi, repellat iste excepturi voluptas quae eaque repudiandae officia hic? Illo, iure! Numquam, exercitationem.</p>
   <p v-if="selectedTab === 'News'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat error commodi tempore facere. Amet minima neque error molestiae ex vero qui tenetur. Voluptatem nostrum ipsam nesciunt, dolorum in est fugit obcaecati illo.</p>
   <p v-if="selectedTab === 'Contacts'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id neque, sapiente perferendis pariatur ex omnis voluptate. Nobis asperiores expedita facilis aspernatur quo inventore ex, veritatis officia dolor rerum!</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
  .tab {
   @media (min-width:$tablet){
   // display: flex;
   // flex-direction: row-reverse;
   // align-items: start;
   }

   &__buttons {
      @include adaptiveValue("row-gap", 12, 7);
      // display: grid;
      @media (min-width:$tablet){
         margin-inline-start: toRem(16);
      }

      @media (max-width:$tablet){
         @include adaptiveValue("column-gap", 24, 12);
            display: flex;
   flex-direction: row-reverse;
   align-items: start;
   flex-wrap: wrap;
         // grid-template-columns: repeat(auto-fit, minmax(toRem(118), 1fr));
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