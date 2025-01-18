<script setup>
import { ref } from 'vue';

const active = ref(false)
const toggleActive = () => {
   active.value = !active.value
}
</script>

<template>
   <div>
   <div 
   @click="toggleActive"
   class="card"
   >
      <div 
         :class="['card__front', { card__front_front: active}]"
      >
      <span>Front</span>
      <font-awesome-icon 
         class="card__icon"
         icon="fa-solid fa-arrow-pointer" />
      </div>
      <div 
         :class="['card__back', { card__back_back: active }]"
      >
         <span>Back</span>
      </div>
   </div>
</div>
</template>

<style lang="scss" scoped>

.card {
   @include adaptiveValue("height", 400, 200);
   position: relative;
   width: 100%;
   perspective: toRem(500);

   &__front,
   &__back {
      position: absolute;
      inset: 0;
      padding: toRem(12);
      font-size: toRem(16);
      backface-visibility: hidden;
      border-radius: .6rem;
      color: var(--text-color);
      background-color: transparent;
      transition: transform .9s;
      box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.07);
   }

   &__front {
      @media (max-width:$tablet){
         
      }
         &_front {
         transform: rotateY(180deg);
      }
   }

   &__icon {
      position: absolute;
      right: 0;
      bottom: 0;
   }

   &__back {
      transform: rotateY(180deg);

         &_back {
         transform: rotateY(360deg);
      }
   }

   @media (min-width:$tablet){
      @media (any-hover: hover) {
      &:hover {
         .card__front {
            transform: rotateY(180deg);
         }
         .card__back {
            transform: rotateY(360deg);
            }
         }
      }
   }
}
</style>