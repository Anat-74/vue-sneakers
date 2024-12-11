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
      <img 
      width="22"
      height="22"
      src="/public/image/rotate_15395632-removebg-preview.avif" alt="">
         <span>Back</span>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.card {
   position: relative;
   perspective: toRem(480);
   transform-style: preserve-3d;
   cursor: pointer;

   &__front,
   &__back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: .6rem;
      background-color: transparent;
      transition: transform .9s;
      box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.22);
      color: var(--text-color);
      font-size: toRem(16);
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
         transform: rotateY(360deg);
      }
   }

   &__icon {
      height: toRem(20);
      position: absolute;
      right: toRem(-9);
      bottom: toRem(-10);
      background-color: transparent;
      color: var(--warning-hover);
      animation-name: ican-rotate;
      animation-duration: 3s;
      animation-delay: 2s;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
   }

   @keyframes ican-rotate {
      0% {
         transform:translate3d(0, 0, 0) scale(1);
      }
      100% {
         transform:translate3d(2px, 2px, 0px) scale(1.1);
      }
   }

      // @media (any-hover: hover) {
   //    &:hover {
   //       .card-items__front {
   //          transform: rotateY(180deg);
   //       }
   //       .card-items__back {
   //          transform: rotateY(360deg);
   //          }
   //       }
   //    }
}
</style>