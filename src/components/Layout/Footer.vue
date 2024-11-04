<script setup>

import UTabsParent from '@/components/UTabsParent.vue';
import USocial from '@/components/USocial.vue';
</script>

<template>
   <footer class="footer">
      <div class="footer__items">
         <USocial class="footer__social" />
            <UTabsParent class="footer__tabs" />
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
         background-image: url('/image/sneakers-desktop-bg.webp');
         background-size: cover;
         background-position: 50% 85%;

         @media (max-width:$tablet){
         min-height: 100vh;
         padding-inline: toRem(12);
         padding-block-start: toEm(88, 15);
         display: flex;
         flex-direction: column;
         align-items: center;
         row-gap: toRem(22);
         background-image: url('/image/sneakers-desktop-bg.webp');
         background-size: cover;
         background-position: 30% toRem(-114);
         }
   
   &:before {
			content: "";
			position: absolute;
         inset: 0;
			background-image: url('/image/drops-splash.avif');
			background-size: cover;
			background-position: 50% 60%;
			mix-blend-mode: screen;

         @media (max-width:$tablet){
            background-position:40% toRem(-252);
         }
		}
   }

      &__social {
         position: relative;
         z-index: 10;
         display: flex;
         column-gap: toRem(44);
         padding-block: toRem(12);
         margin-block-end: toRem(16);

         @media (max-width:$tablet){
            width: 100%;
            justify-content: space-between;
            border-top: 3px solid var(--whitesmoke-color);
            border-bottom: 3px solid var(--whitesmoke-color);
            margin-block-end: toRem(0);
         }
      }

      &__tabs {
         position: relative;
         z-index: 10;
   }
}

</style>