<script setup>
import { onMounted } from 'vue';
import { usePageFavoritesStore } from '@/stores/PageFavoritesStore';
import { useAddToFavoriteStore } from '@/stores/AddToFavoriteStore'
import UCardList from '@/components/UCardList.vue';

const pageFavoritesStore = usePageFavoritesStore()
const addToFavoriteStore = useAddToFavoriteStore()

onMounted(async () => {
   await pageFavoritesStore.pageFavorites()
})
</script>

<template>
   <section class="favorites">
         <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
   <h2 class="favorites__title">Мои закладки</h2>
   <UCardList
   @add-to-favorite="addToFavoriteStore.addToFavorite"
   :items="pageFavoritesStore.favorites" 
   isFavorites

   />
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
      .fa-arrow-left {
         width: toRem(22);
         height: toRem(20);
         color: var(--orange-color);
         margin-block-end: toRem(16);
      }
   }
</style>