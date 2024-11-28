<template>
   <div class="card-items">
      <div class="card-items__front">
         <img
         height="122"
         src="/public/image/sneakers/sneakers-1.avif" alt="">
      </div>
      <div class="card-items__back">
         <span>Back</span>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.card-items {
   position: relative;
   width: 9rem;
   height: 12rem;
   perspective: toRem(480);

   @media (any-hover: hover) {
      &:hover {
         .card-items__front {
            transform: rotateY(180deg);
         }
         .card-items__back {
            transform: rotateY(360deg);
            }
         }
      }

   &__front,
   &__back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: .6rem;
      transition: transform 1s;
   }

   &__front {
      background-color: #352f44;
      color: #ffff;
   }

   &__back {
      background-color: #d8d8e3;
      color: #222;
      transform: rotateY(180deg);
   }
}
</style>