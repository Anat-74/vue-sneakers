<script setup>
import UTabs from '@/components/UTabs.vue';
import UFrontBackCard from '@/components/UFrontBackCard.vue';
</script>

<template>
   <footer class="footer">
      <div class="footer__items">
         <UFrontBackCard class="footer__front-back" />
            <UTabs class="footer__tabs"/>
      </div>
   </footer>
</template>

<style lang="scss" scoped>
   .footer {
      @media (min-width:$tablet){
      padding-inline-start: toRem(42); 
   }

   @media (max-width:$tablet){
      display: none;
   }

   &__items {
         position: relative;
         padding-block-start: toRem(24);
         padding-block-end: toRem(52);
         background-image: url('/image/sneakers-bg.avif');
         background-size: cover;
         background-position: 50%;

         @media (max-width:$tablet){
         min-height: 100vh;
         padding-inline: toRem(12);
         padding-block-start: toEm(184, 15);
         display: flex;
         flex-direction: column;
         align-items: center;
         background-image: url('/image/sneakers-bg.avif');
         background-size: cover;
         background-position: 50% toRem(-299);
         }
          @media (max-width:$mobile){
            background-position: 57% toRem(-214);
          }
   
   &:before {
			content: "";
			position: absolute;
         inset: 0;
			background-image: url('/image/drops-splash.avif');
			background-size: cover;
			background-position: 50%;
			mix-blend-mode: screen;

         @media (max-width:$tablet){
            background-position: 80% toRem(-279);
         }

         @media (max-width:$mobile){
            background-position: 55% toRem(-299);
         }
		}
   }

   &__front-back {
      display: none;

      @media (max-width:$tablet){
      display: block;
      @include adaptiveValue("width", 385, 150);
      @include adaptiveValue("height", 199, 150);
      background-color: transparent;
      position: absolute;
      z-index: 20;
      top: toRem(12);
      left: toRem(12);
      }
   }

      &__tabs {
         position: relative;
         z-index: 10;

         @media (max-width:$tablet){
            position: absolute;
            top: toRem(12);
            right: toRem(12);
            left: toRem(12);
            visibility: visible;
            opacity: 1;
            transition: visibility .7s, opacity .7s;
         }
      }
}

</style>