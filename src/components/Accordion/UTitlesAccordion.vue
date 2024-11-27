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
       type: Object,
       required: true
    },
    isOpen: {
       type: Boolean,
       required: true
    }
 })
const emit = defineEmits(['toggleSubTitle'])
const handleClick = (id) => emit('toggleSubTitle', id)
</script>

<template>
    <li class="titles">
       <UButton
          @click="handleClick(id)"
          :is-open="isOpen"
          icon="chevron-right"
          :class="['titles__title', {titles__title_open: isOpen}]"
          >{{title}}
       </UButton>
          <router-link 
             v-for="sub of subTitle"
             :key="sub.name"
             :to="sub.path"
             :class="['titles__subtitle', {titles__subtitle_open: isOpen}]"
             >{{ sub.name }}
       </router-link>
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
         padding-block: toEm(2, 20);
         cursor: pointer;
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
         margin-block-end: toRem(3);
         padding-inline: toRem(4);
         overflow-y: scroll;
         background-color: var(--transparent-color);
         transition: height .4s;

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
            height: toRem(26);
            @media (min-width:$tablet){
            border: 1px solid var(--grey-color);
            border-radius: 0 0 toRem(4) toRem(4);
            border-top: none;
            }
         }
      }
      .router-link-active {
      color: var(--danger-hover);
      font-weight: 500;
   }
   }
</style>