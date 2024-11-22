<script setup>
import { onMounted } from 'vue';
import { usePageFavoritesStore } from '@/stores/PageFavoritesStore';
import UCardList from '@/components/UCardList.vue';

const pageFavoritesStore = usePageFavoritesStore()

onMounted(async () => {
  await pageFavoritesStore.pageFavorites()
})
</script>

<template>
   <section 
    class="favorites">
         <router-link to="/">
            назад
         </router-link>
   <h2>Мои закладки</h2>
   <UCardList
   :items="pageFavoritesStore.favorites" 
   is-favorites
   />
</section>
</template>

<style lang="scss" scoped>
   .favorites {
      @media (max-width:$tablet){
         padding-block-end: toRem(40);
      }
   }
</style>