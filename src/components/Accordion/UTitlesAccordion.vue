<script setup>
import UButton from '@/components/UButton.vue';

 defineProps({
   id: {
      type: Number,
      required: true
    },
    title: {
       type: String,
      required: true
    },
    subTitle: {
      type: Array
    },
    isOpen: {
      type: Boolean
    }
})

const emit = defineEmits(['toggleSubTitle'])
const handleClick = (id) => emit('toggleSubTitle', id)
</script>

<template>
           <li class="titles">
            <UButton
               @click="handleClick(id)"
               :isOpen="isOpen"
               icon="chevron-right"
               :class="['titles__title', {titles__title_open: isOpen}]"
            >{{title}}
            </UButton>
            <div
            :class="['titles__subtitle', {titles__subtitle_open: isOpen}]">
               <router-link to="/sneakers-man"
               >{{ subTitle }}
            </router-link>
            </div>
        </li>
</template>

<style lang="scss" scoped>
   .titles {
      &__title {
         @include adaptiveValue("font-size", 20, 18);
         display: flex;
         align-items: center;
         justify-content: space-between;
         width: 100%;
         // padding-block: toEm(4, 20);
         // margin-block-end: toRem(4);
         cursor: pointer;
         color: rgb(0 0 0 / .6);
         font-weight: 500;
         transition: transform .4s;

         @media (min-width:$tablet){
         padding-inline: toEm(8, 20);
         border: 1.4px solid var(--grey-color);
         border-radius: toEm(4, 20);
         }
      }

      &__subtitle {
         @include adaptiveValue("font-size", 18, 16);
         height: 0;
         display: grid;
         align-items: center;
         row-gap: toRem(1);
         padding-inline: toRem(4);
         overflow-y: scroll;
         background-color: var(--transparent-color);
         color: rgb(0 0 0 / .9);
         transition: height .3s;

         &::-webkit-scrollbar{
             width: toRem(3);
         }
         &::-webkit-scrollbar-track{
             appearance: none;
             background-color: var(--transparent-color);
         }
         &::-webkit-scrollbar-thumb{
             width: toRem(5);
             background-color: rgb(232, 210, 182);
             border-radius: toRem(50);
         }

         &_open {
            height: toRem(36);
            margin-block-end: toRem(7);

            a {
               align-self: start;
            }

            @media (min-width:$tablet){
            border: 1px solid var(--grey-color);
            border-radius: 0 0 toRem(4) toRem(4);
            border-top: none;
            }
         }
      }
   }
</style>