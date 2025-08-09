<script setup>
import debounce from 'lodash.debounce';
import { useFetchItemsStore } from '@/stores/FetchItemsStore'
const fetchItemsStore = useFetchItemsStore()

const emit = defineEmits(['update:modelValue'])

 defineProps({
   label: {
      type: String,
      required: false
   },
   name: {
      type: String,
      required: false
   },
   placeholder: {
      type: String,
      required: false
   },
   modelValue: {
      type: String,
      default: ''
   },
   type: {
   type: String,
      default: 'search',
      validator: (value) => [
         'text',
         'search',
         'email',
         'password',
         'tel',
         'url'
   ].includes(value)
   }
})

const onChangeSearchInput = debounce((e) => {
   emit('update:modelValue', fetchItemsStore.filters.searchQuery = e.target.value)
}, 200)

</script>

<template>
<font-awesome-icon 
icon="fa-solid fa-magnifying-glass"
class="image-search"
/>
 
   <input
      @input="onChangeSearchInput"
      :modelValue="modelValue"
      :id="name"
      :type="type" 
      :placeholder="placeholder"
      class="input-search"
      >
    <label class="input-label" :for="name">{{ label }}</label>
</template>

<style lang="scss" scoped>
.image-search {
   @media (min-width:$tablet){
   position: absolute;
   z-index: 20;
   top: 50%;
   transform: translateY(-50%);
   left: toRem(18);
   width: toRem(16);
   height: toRem(16);
   color: var(--grey-color);
   }


   @media (max-width:$tablet){
      @include adaptiveValue("top", 21, 14);
      position: relative;
      z-index: 20;
      left: toRem(22);
      width: toRem(11);
      height: toRem(11);
      color: var(--grey-color);
      background-color: var(--transparent);
   }
}

.input {
   &-search {
   @include adaptiveValue("padding-block", 14, 9);
   position: relative;
   z-index: 10;
   padding-inline-start: toRem(45);
   padding-inline-end: toRem(5);
   border: 3px solid var(--whitesmoke-color);
   border-radius: toEm(22, 16);
   outline: none;

   @media (min-width:$tablet){
      font-size: toRem(18);
   }
   

   @media (max-width:$tablet){
   @include adaptiveValue("width", 125, 90);
   padding-inline-start: toRem(24);
   padding-inline-end: toRem(4);
   font-weight: 500;
   border: 2px solid var(--lime-color);
   border-inline-end: 0 solid var(--lime-color);
   border-radius: toRem(8) 0 0 toRem(8);
   color: var(--lime-color);
   background-color: rgba(255 255 255/.3);
   }

&::placeholder {
   letter-spacing: 1px;
   font-size: toRem(16);
   line-height: 1.2;
   font-weight: 400;
   color:  var(--grey-color);

   @media (max-width:$tablet){
      font-size: toRem(12);
      color: var(--lime-color);
      opacity: .8;
   }
   }

&:focus-visible {
   border: 2px solid var(--grey-color);
   & + .input-label {
        z-index: 10;
        opacity: 1;
        top:toRem(-22);
      }

      @media (max-width:$tablet){
      border: 2px solid var(--lime-color);
      outline: 3px solid var(--whitesmoke-color);
      & + .input-label {
        top:toRem(-18);
      }
      }
}

&:active {
      border: 2px solid var(--orange-color);
      }
   //    &:not(:placeholder-shown) {
   //    & + .input-label {
   //      z-index: 10;
   //      opacity: 1;
   //      top: toRem(-18);
   //    }
   //  }
   }
   &-label {
      display: block;
      position: absolute;
      top: toRem(18);
      left: toRem(50);
      opacity: 0;
      z-index: -1;
      font-family: var(--font-family);
      font-size: toRem(15);
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--lime-color);
      transition: .3s;

    @media (max-width:$tablet){
      left: toRem(20);
      font-weight: 400;
      font-size: toRem(13);
      font-family: cursive;
      background-color: var(--transparent);
    }
  }
   }
</style>