<script setup>
import { onMounted, watch, inject } from 'vue';
import { usePageFavoritesStore } from '@/stores/PageFavoritesStore';
import { useAddToFavoriteStore } from '@/stores/AddToFavoriteStore'
import { useOnClickAddOrRemove } from '@/composables/OnClickAddOrRemove'
import UCardList from '@/components/UCardList.vue';

const { cartItems } = inject('cart')
const { onClickAddOrRemove } = useOnClickAddOrRemove()
const pageFavoritesStore = usePageFavoritesStore()
const addToFavoriteStore = useAddToFavoriteStore()

onMounted(async () => {
   const localCartItems = localStorage.getItem('cartItems')
   cartItems.value = localCartItems ? JSON.parse(localCartItems) : []

   await pageFavoritesStore.pageFavorites()

   pageFavoritesStore.favorites = pageFavoritesStore.favorites.map((item) => ({
    ...item,
    isAdded: cartItems.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(cartItems,
   () => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  },
  { deep: true }
)
</script>

<template>
   <section class="favorites">
         <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
   <h2 class="favorites__title">Мои закладки</h2>
   <UCardList
   @add-to-favorite="addToFavoriteStore.addToFavorite"
      @add-to-cart="onClickAddOrRemove"
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
   }
   .fa-arrow-left {
         width: toRem(22);
         height: toRem(20);
         color: var(--orange-color);
         margin-block-end: toRem(16);
      }
</style>