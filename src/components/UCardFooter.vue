<script setup>
import { ref } from 'vue';

const active = ref(false)
const toggleActive = () => {
   active.value = !active.value
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
.card {
   position: relative;
   perspective: toRem(500);
   transform-style: preserve-3d;
   cursor: pointer;

   &__front,
   &__back {
      position: absolute;
      inset: 0;
      padding: toRem(12);
      font-size: toRem(16);
      backface-visibility: hidden;
      border-radius: toRem(16);
      background-color: transparent;
      color: var(--text-color);
      transition: transform .9s;
      box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.22);
   }

   &__front {
      &_front {
         transform: rotateY(180deg);
      }
   }

   &__back {
      transform: rotateY(180deg);
      img {
         position: absolute;
         right: 0;
         bottom: 0;
         background-color: transparent;
      }
      &_back {
         height: toEm(260, 15);
         transform: rotateY(360deg) rotateX(4deg) scale(1.8) translate(toRem(85), toRem(72));

         @media (max-width:$mobile){
            transform: rotateX(4deg) scale(1.8) translate(toRem(55), toRem(75));
         }

         @media (max-width:toEm(517)){
            transform: rotateX(4deg) scale(1.7) translate(toRem(40), toRem(70));
         }
         @media (max-width:toEm(347)){
            transform: rotateX(4deg) scale(1.7) translate(toRem(33), toRem(70));
         }
      }
   }

   &__icon {
      height: toRem(16);
      position: absolute;
      right: toRem(-8);
      bottom: toRem(-8);
      transform: rotate(-35deg);
      background-color: transparent;
      color: rgb(0 0 0 / .5);
      animation-name: ican-rotate;
      animation-duration: 3.5s;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
   }

   @keyframes ican-rotate {
      0% {
         transform:translate3d(-2px, -2px, 0) scale(1) rotate(-35deg);
      }
      100% {
         transform:translate3d(0, 0, 0) scale(1.1) rotate(-35deg);
      }
   }

   // @media (min-width:$tablet){
   //    @media (any-hover: hover) {
   //    &:hover {
   //       .card__front {
   //          transform: rotateY(180deg);
   //       }
   //       .card__back {
   //          transform: rotateY(360deg);
   //          }
   //       }
   //    }
   // }
}
</style>