<script setup>
import { ref } from 'vue'
import { useFetchItemsStore } from '@/stores/FetchItemsStore'
import { useAddToFavoriteStore } from '@/stores/AddToFavoriteStore'
import { useCartStore } from '@/stores/CartStore'

import UCardList from '@/components/UCardList.vue'
import UInput from '@/components/UInput.vue'
import USelect from '@/components/USelect.vue'
import UBrands from '@/components/UBrands.vue'
import ULoader from '@/components/ULoader.vue'

const fetchItemsStore = useFetchItemsStore()
const addToFavoriteStore = useAddToFavoriteStore()
const cartStore = useCartStore()

const message = ref('')
</script>

<template>
  <section class="home">
   <div class="home__items-brands">
   <UBrands class="home__brands" />
</div>
    <div class="home__forms">
      <h1 class="home__title">Все кроссовки</h1>
      <form class="home__form-sel">
        <USelect 
        v-model="fetchItemsStore.filters.sortBy" 
        name="sneakers"
         />
      </form>
      <form class="home__form-input">
        <UInput 
         v-model="message"
         label="Удачного поиска!)"
         name="name"
        />
      </form>
    </div>
    <ULoader v-if="fetchItemsStore.loader" />
    <UCardList
      :items="fetchItemsStore.items"
      @add-to-favorite="addToFavoriteStore.addToFavorite"
      @add-to-cart="cartStore.onClickAddOrRemove"
      class="home__card-list"
    />
  </section>
</template>

<style lang="scss" scoped>
.home {
   @media (min-width:$tablet){
       padding-inline-start: toRem(19); 
   }

   &__items-brands {
      @include adaptiveValue("margin-block-end", 32, 20);
      overflow-x: auto;
   }

   &__brands {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width:toEm(618)){
         width: toRem(580);
      }
      @media (max-width:$mobileSmall){
         width: toRem(490);
      }
   }

  &__forms {
   @include adaptiveValue("margin-block-end", 28, 14);
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    row-gap: toRem(16);
  }

  &__title {

   color: var(--grey-color);
  }

  &__form-sel {
    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__form-input {
    position: relative;
    margin-inline-start: toRem(16);

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__card-list {
   @media (max-width:$tablet){
      padding-block-end: toRem(108);
   }
  }
}
</style>
