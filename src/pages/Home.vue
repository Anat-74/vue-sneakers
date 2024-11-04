<script setup>
import { inject, ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { filters } from '@/exportFunction/filters'

import UCardList from '@/components/UCardList.vue'
import UInput from '@/components/UInput.vue'
import USelect from '@/components/USelect.vue'
import UBrands from '@/components/UBrands.vue'

const { cartItems, addToCart, removeFromCart } = inject('cart')
const { isOpenMenu } = inject('toggle')

const items = ref([])

// const filters = reactive({
//    sortBy: 'title',
//    searchQuery: ''
// })

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post('https://f1472ab18bd3ee1f.mokky.dev/favorites', obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://f1472ab18bd3ee1f.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://f1472ab18bd3ee1f.mokky.dev/favorites')
    items.value = items.value.map((item) => {
      const favorite = favorites.find((element) => element.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://f1472ab18bd3ee1f.mokky.dev/items', {
      params
    })
    items.value = data.map((obj) => ({
       ...obj,
      isFavorite: false,
      favoriteId: null,
       isAdded: false
    }))
  } catch (err) {
    console.log(err)
   }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()

  // const localCartItems = localStorage.getItem('cartItems')
  // cartItems.value = localStorage ? JSON.parse(localCartItems) : [];

  // items.value = items.value.map((item) => ({
  //    ...item,
  //    isAdded: cartItems.value.some(cartItem => cartItem.id === item.id)
  // }))
})

watch(cartItems, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)

const message = ref('')
</script>

<template>
  <section :class="['home', {home_isopen: isOpenMenu}]">
   <div class="home__items-brands">
   <UBrands class="home__brands" />
</div>
    <div class="home__forms">
      <h1 class="home__title">Все кроссовки</h1>
      <form class="home__form-sel">
        <USelect 
        v-model="filters.sortBy" 
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

    <UCardList
      :items="items"
      @add-to-favorite="addToFavorite"
      @add-to-cart="onClickAddPlus"
      class="home__card-list"
    />

  </section>
</template>

<style lang="scss" scoped>
.home {
   @media (min-width:$tablet){
       padding-inline-start: toRem(19); 
   }

   @media (max-width:$tablet){
      min-height: 100dvh;
      transition: transform .3s linear, opacity .3s, filter .1s;

      &_isopen {
         @media (prefers-reduced-motion: no-preference) { 
            transform: scale(.995);
         }
      filter: blur(12px);
      opacity: .7;
      transition: transform .3s linear, opacity .3s, filter .3s;

      .home__card-list {
         padding-block-end: 0;
      }
   }
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
      @include adaptiveValue("padding-block-end", 109, 94);
   }
  }
}
</style>
