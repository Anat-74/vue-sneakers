<script setup>
import UTabs from '@/components/UTabs.vue'
import USocial from '@/components/USocial.vue';
</script>

<template>
   <footer class="footer">
      <div class="footer__items">
         <USocial class="footer__social" />
            <UTabs/>
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
         padding-block-start: toEm(4, 15);
         display: flex;
         flex-direction: column;
         align-items: center;
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
         @include adaptiveValue("column-gap",44 ,16 );
         @include adaptiveValue("margin-block-end",16 ,9 );
         align-self: start;
         position: relative;
         z-index: 10;
         display: flex;
         padding-block: toRem(12);
         margin-block-end: toRem(16);
      }
}

</style>