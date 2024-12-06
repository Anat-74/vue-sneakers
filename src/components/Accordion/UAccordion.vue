<script setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n'

const { rt, tm } = useI18n()

const { isOpenMenu } = inject('toggle')
</script>

<template>
   <ul >
         <template
            v-for="accordion in tm('accordionSidebar')"
            :key="accordion.title"
         >
         <li class="accordion">
         <details 
            name="faq" 
            class="accordion__details"
         >
           <summary 
           class="accordion__summary"> 
           {{ rt(accordion.title) }}
           <font-awesome-icon icon="fa-chevron-right" />
         </summary> 
         </details>

         <div class="accordion__content">
         <div class="accordion__content-items">
            <router-link
               class="accordion__link"
               @click="isOpenMenu = false"
               v-for="link in accordion.links"
               :key="link.name"
               :to="rt(link.path)"
            >{{ rt(link.name) }}
            </router-link>
                  </div>
               </div>
            </li>
         </template>
      </ul>
</template>

<style lang="scss" scoped>
   .accordion {
      &__content {
         transition: .3s;
      }

      &__details {
         font-size: toRem(22);
      }

      &__details[open] +
      &__content {
         grid-template-rows: 1fr;
      }

      &__details[open] {
         .accordion__summary {
            color: var(--danger-color);
         }
         .fa-chevron-right {  
         transform: rotate(90deg);
         transition: transform .3s;
         }
      }

      &__summary {
         @include adaptiveValue("font-size", 22, 20);
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-block: toEm(7, 22);
         font-weight: 500;
         cursor: pointer;

         .fa-chevron-right {
            width: toRem(8);
            transition: transform .3s;
         }


         @media (min-width:$tablet){
         padding-inline: toEm(8, 22);
         border: 1.4px solid var(--grey-color);
         border-radius: toEm(4, 22);
         }
      }

      &__content {
         display: grid;
         grid-template-rows: 0fr;
      }

      &__content-items {
         overflow: hidden;
      }

      &__link {
         @include adaptiveValue("font-size", 20, 18);
         display: grid;
         align-items: center;
         padding-inline: toEm(4, 20);
         margin-block-end: toEm(2, 20);

         @media (min-width:$tablet){
            border: 1px solid var(--grey-color);
            border-radius: 0 0 toEm(4, 20) toEm(4, 20);
            border-top: none;
            }
      }

      .router-link-active {
      color: var(--danger-hover);
      font-weight: 500;
   }
   }
</style>