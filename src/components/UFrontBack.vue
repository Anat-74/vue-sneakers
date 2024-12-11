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
      icon="fa-regular fa-hand-pointer" 
      class="card__icon"
      />
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
   perspective: toRem(480);
   transform-style: preserve-3d;

   &__front,
   &__back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: .6rem;
      background-color: transparent;
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
      &_back {
         transform: rotateY(360deg);
      }
   }

   &__icon {
      position: absolute;
      right: 0;
      bottom: 0;
      height: toRem(22);
      transform: rotate(-45deg);
      color: var(--lime-color);
      background-color: transparent;

      animation-name: ican-rotate;
      animation-duration: 1.5s;
      animation-delay: 3s;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-iteration-count: 6;
   }

   @keyframes ican-rotate {
      0% {
         transform: rotate(-45deg) scale(1);
      }
      100% {
         transform: rotate(-15deg) scale(1.1);
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