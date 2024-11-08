<script setup>
import { ref } from 'vue';
import UButton from '@/components/UButton.vue';

   defineProps({
   imageUrl: {
      type: Array,
      required: true,
   },
   title: {
       type: String,
      required: true
    },
   price: {
      type: Number,
      required: true
    },
   isFavorite: {
      type: Boolean,
      required: false
    },
   isAdded: {
      type: Boolean,
      required: false
    },
   onClickFavorite: {
       type: Function,
       required: false
    },
   onClickAdd: {
       type: Function,
       required: false
    }
   })

const isWatched = ref(false)
</script>

<template>
   <article class="card">
      <UButton
      v-if="onClickFavorite"
      @click="onClickFavorite"
      :isFavorite="isFavorite"
      favorite="favorite"
      icon="heart"
      class="card__btn-heart" 
      />

      <div 
      @scroll="isWatched='true'"
      class="card__slider" 
      >
      <img 
         v-for="image of imageUrl"
         :key="image"
         :src="image" 
         :alt="title"
         width="142" 
         height="128" 
         class="card__image" 
      >
         </div>
      <span :class="['card__line', {card__line_watched: isWatched}]"></span>
      <h2 class="card__title">{{title}}</h2>
      <h3 class="card__subtitle">Цена:</h3>
      <span class="card__price">{{price}}</span>
      
      <UButton
      add="add"
      v-if="onClickAdd"
      @click="onClickAdd" 
      :isAdded="isAdded"
      class="card__btn-add"
      />
   </article>
</template>

<style lang="scss" scoped>
.card {
   position: relative;
   display: grid;
   justify-items: center;
   padding-inline: toEm(30, 15);
   padding-block-start: toEm(28, 15);
   padding-block-end: toEm(30, 15);
   border-radius: toEm(40, 15);
   box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.05);
   transition: all .7s ease;

&__btn-heart {
   @include adaptiveValue("left", 32, 27);
   @include adaptiveValue("top", 30, 25);
   position: absolute;
   z-index: 99;

   @media (any-hover: hover) {
      &:hover {
   transform: scale(1.1);
   border-radius: toEm(12, 15);
   }
}
}


&__slider {
   display: flex;
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   border-radius: toRem(10);

   @media (max-width:$tablet){
      outline: 2px inset rgb(245 245 245 / .3);
      box-shadow: 0px toEm(1, 15) toEm(1, 15) toRem(1) hsla(0, 0%, 0%, 0.015);
   }
}

&__image {
   min-width: 100%;
   scroll-snap-align: start;
   scroll-snap-stop: always;
   object-fit: contain;
}

&__line {
   width: toRem(22);
   border-bottom: 2px dashed var(--grey-color);
   margin-block-start: toEm(12, 15);
   margin-block-end: toEm(5, 15);

   &_watched {
      border-color: var(--lime-color) !important;
   }
}

&__title {
   font-size: toEm(15, 15);
   font-weight: 400;
   margin-block-end: toEm(12, 15);

   @media (max-width: toEm(446)){
      font-weight: 500;
   }
}

&__subtitle {
   justify-self: start;
   margin-block-end: toEm(2, 11);
   text-transform: uppercase;
   font-weight: 500;
   font-size: toRem(11);
   color: var(--grey-color);
}

&__price {
   justify-self: start;
   font-weight: 700;
   letter-spacing: toRem(1);
}

&__btn-add {
   @include adaptiveValue("right", 32, 27);
   @include adaptiveValue("bottom", 32, 25);
   position: absolute;
   svg {
      color: green;
      height: 32px;
   }

   @media (any-hover: hover) {
      &:hover {
         transform: scale(1.1);
         border-radius: toEm(12, 15);
         }
      }
   }
}
</style>