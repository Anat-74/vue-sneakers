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

onMounted(() => {
   const localCartItems = localStorage.getItem('cartItems')
   cartItems.value = localCartItems ? JSON.parse(localCartItems) : []
})

watch(cartItems,
  async () => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value)),
      await pageFavoritesStore.pageFavorites()
      pageFavoritesStore.favorites = pageFavoritesStore.favorites.map((item) => ({
    ...item,
      isAdded: cartItems.value.some((cartItem) => cartItem.id === item.id)
   }))
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
   v-if="pageFavoritesStore.favorites.length"
   @add-to-favorite="addToFavoriteStore.addToFavorite"
   @add-to-cart="onClickAddOrRemove"
   :items="pageFavoritesStore.favorites" 
   isFavorites
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
         letter-spacing: 1px;
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