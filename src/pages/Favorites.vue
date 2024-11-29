<script setup>
import { usePageFavoritesStore } from '@/stores/PageFavoritesStore';
import UCardList from '@/components/UCardList.vue';
import ULoader from '@/components/ULoader.vue'

const pageFavoritesStore = usePageFavoritesStore()
</script>

<template>
   <section class="favorites">
         <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
   <h2 class="favorites__title">Мои закладки</h2>
   <ULoader v-if="pageFavoritesStore.loader" />
   <UCardList
   v-if="pageFavoritesStore.favorites.length"
   :items="pageFavoritesStore.favorites" 
   is-favorites
   />
   <div v-else
   class="favorites__no-favorites">
   <p
   class="favorites__text">
      У Вас пока нет избранных товаров
   </p>
   <img 
   width="44" 
   height="44"
   src="/image/emoji-2.avif" alt="emoji"> 
   </div>
</section>
</template>

<style lang="scss" scoped>
   .favorites {
      @media (max-width:$tablet){
         padding-block-end: toRem(90);
      }

      &__title {
         color: var(--grey-color);
         margin-block-end: toRem(16);
      }

      &__no-favorites {
         display: grid;
         justify-items: center;
      }

      &__text {
         text-align: center;
         font-size: toRem(20);
         font-family: var(--font-family);
         color: var(--danger-color);
         letter-spacing: .7px;
         margin-block-end: toRem(9);
      }
   }
   .fa-arrow-left {
         width: toRem(22);
         height: toRem(20);
         color: var(--orange-color);
         margin-block-end: toRem(16);
      }
</style>