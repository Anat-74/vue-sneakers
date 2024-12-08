<script setup>
import UNavigation from '@/components/UNavigation.vue'
import UDialogContacts from '@/components/UDialoglContacts.vue';

</script>

<template>
   <header 
      class="header">
         <router-link to="/"
         class="header__logo">
         <img width="40" height="40" 
         src="/image/logo.avif" 
         alt="Logo"
         >
      </router-link>
         <h2 class="header__title">vue sneakers</h2>
         <p class="header__descr">{{ $t('headerDescr') }}</p>
         <UNavigation class="header__nav"/>
   <UDialogContacts />
   </header>
</template>

<style lang="scss" scoped>

.header {
   @include adaptiveValue("margin-block-end", 44, 28);
   @include adaptiveValue("height", 128, 80);
   display: grid;
   align-items: center;
   row-gap: toEm(6, 15);
   column-gap: toEm(16, 15);
   grid-template: 1fr auto 1fr / repeat(2, auto) 1fr;
   grid-template-areas: 
   "logo title nav"
   "logo title nav"
   "logo descr nav "
   ;
   position: relative;
   border-bottom: 1px solid var(--grey-color);

&__logo {
   grid-area: logo;
   @media (min-width:$tablet){
      padding-inline-start: toRem(19); 
   }
}

&__nav {
   grid-area: nav;
   justify-self: end;

   @media (max-width:$tablet){
       display: none; 
   }
}

&__title {
   grid-area: title;
   transform: translateY(70%);
   text-transform: uppercase;
   font-family: var(--font-family);
   letter-spacing: 1px;
   color: var(--lime-color);
}

&__descr {
   grid-area: descr;
   align-self: start;
   font-style: italic;
   font-weight: 400;
   color: var(--warning-hover);
   }
}
</style>