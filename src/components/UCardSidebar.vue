<template>
   <div class="card-items">
      <div class="card-items__front">
         <img
         height="222"
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
   width: 100%;
   perspective: toRem(500);

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
      background-color: transparent;
      transition: transform 1s;
      box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.05);
   }

   &__front {
      color: #ffff;
   }

   &__back {
      color: #222;
      transform: rotateY(180deg);
   }
}
</style>