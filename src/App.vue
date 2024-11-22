<script setup>
import { computed, provide, ref, watch, onMounted } from 'vue'
import { useFetchItemsStore } from '@/stores/FetchItemsStore'
import { useDarkMode } from '@/composables/DarkModeTheme'

import Header from '@/components/Layout/Header.vue'
import UDialogCart from '@/components/DialogCart/UDialoglCart.vue'
import UNavigation from '@/components/UNavigation.vue'
import UDialogSearch from '@/components/UDialogSearch.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
import Footer from '@/components/Layout/Footer.vue'
import USocial from '@/components/USocial.vue'
import UButton from '@/components/UButton.vue'
import UTheme from '@/components/UTheme.vue'

const { darkMode, toggleDarkMode } = useDarkMode()
const fetchItemsStore = useFetchItemsStore()

const isOpenMenu = ref(false)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
provide('toggle', {
  isOpenMenu,
  toggleMenu
})

/* Корзина */
const cartItems = ref([])

const totalPrice = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const removeFromCart = (item) => {
   cartItems.value.splice(cartItems.value.indexOf(item), 1)
   item.isAdded = false
}

const addToCart = (item) => {
  cartItems.value.push(item)
   item.isAdded = true
}

onMounted(async () => {
   const localCartItems = localStorage.getItem('cartItems')
  cartItems.value = localCartItems ? JSON.parse(localCartItems) : []

   await fetchItemsStore.fetchItems()

  fetchItemsStore.items = fetchItemsStore.items.map((item) => ({
    ...item,
    isAdded: cartItems.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(
  cartItems, () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  },
  { deep: true }
)

provide('cart', {
  cartItems,
  totalPrice,
  addToCart,
  removeFromCart
})
/* Корзина */

const x = ref(1)
const y = ref(2)

// одиночный ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// геттер
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`сумма x + y равна: ${sum}`)
  }
)

// массив из нескольких источников
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x равен ${newX} и y равен ${newY}`)
})
</script>
<template>
  <div :data-theme="darkMode" class="app">
    <div class="app__sidebar">
      <Sidebar>
        <UTheme v-model="toggleDarkMode" />
      </Sidebar>
    </div>

    <div :class="['app__container', { app__container_isopen: isOpenMenu }]">
      <Header class="app__header" />
      <main class="app__main">
        <RouterView />
      </main>

      <UNavigation :class="['app__navigation', { app__navigation_isopen: isOpenMenu }]">
        <template #search>
          <UButton 
          onclick="window.searchNavigation.show()" 
          icon="magnifying-glass" 
          />
        </template>
        <template #social>
          <USocial class="app__social"></USocial>
        </template>
        <template #home>
          <router-link 
          to="/" 
          @click="fetchItemsStore.filters.searchQuery = ''"
          >
            <font-awesome-icon icon="fa-solid fa-house" />
          </router-link>
        </template>
      </UNavigation>

      <Footer class="app__footer" />

      <UDialogSearch />
      <UDialogCart 
      :total-price="totalPrice" 
      :vat-price="vatPrice" 
      />
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: $mobile) {
  @media (any-hover: hover) {
    main:has(article:hover) {
      article:not(:hover) {
        opacity: 0.8;
        filter: grayscale(90%);
      }
    }
  }
}

.app {
  //*min-width: $tablet start-----------------------------------------------------------------------------------------------------------------
  @media (min-width: $tablet) {
    display: grid;
    grid-template-columns: auto 1fr;

    .app__sidebar {
      @include adaptiveValue('width', 320, 245);
    }

    .app__container {
      min-height: 100dvh;
      transition: transform 0.6s;

      &_isopen {
        transform: translateX(toRem(-160));
        transition: transform 0.6s;
      }
    }
  }
  //*min-width: $tablet end---------------------------------------------------------------------------------------------------------
  &__container {
    min-height: 100dvh;

    @media (max-width: $tablet) {
      transition:
        transform 0.2s linear,
        opacity 0.2s,
        filter 0.1s;
      &_isopen {
        @media (prefers-reduced-motion: no-preference) {
          transform: scale(0.995);
        }
        filter: blur(12px);
        opacity: 0.7;
        transition:
          transform 0.2s linear,
          opacity 0.2s,
          filter 0.2s;
      }
    }
  }

  &_header {
  }
  &__main {
    margin-block-end: toRem(52);
  }

  &__navigation {
    display: none !important;

    @media (max-width: $tablet) {
      display: grid !important;
      grid-template-columns: repeat(3, auto) 1fr;
      align-items: center;
      width: 100%;
      position: fixed;
      z-index: 100;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      padding-inline: toRem(15);
      padding-block: toRem(12);
      transition:
        visibility 0.2s linear,
        opacity 0.1s linear;

      &_isopen {
        visibility: hidden !important;
        opacity: 0;
        transition:
          visibility 0s 0.2s linear,
          opacity 0.2s linear;
      }
    }

    @media (max-width: $mobile) {
      grid-template-columns: auto auto 1fr;
      padding-block: toRem(19);
    }
  }

  &__social {
    @media (min-width: $mobile) {
      @include adaptiveValue('margin-inline-start', 192, 112, 0, $containerWidth, 767.98);
      padding-block: toRem(12);
      border-radius: toRem(8);
      border: 1px solid var(--grey-color);
      background-color: var(--background-color);
    }

    @media (max-width: $tablet) {
      @include adaptiveValue('padding-inline', 16, 2);
      display: flex;
      justify-content: center;
      column-gap: toRem(25);
      background-color: rgb(245 245 245 / 0.1);

      svg {
        width: toRem(32);
        height: toRem(26) !important;
      }
    }

    @media (max-width: $mobile) {
      height: 100%;
      overflow-y: auto;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
      column-gap: toRem(0);
      row-gap: toRem(6);
      padding-block-start: toRem(59);
      border-right: 3px solid var(--white-color);
      border-left: 3px solid var(--white-color);

      svg {
        width: toRem(28);
        height: toRem(27);
      }
    }
  }

  .fa-house {
    @include adaptiveValue('height', 28, 22);
    color: var(--grey-color);
  }

  .router-link-active {
    .fa-house {
      padding: 2px;
      border-radius: toRem(8);
      color: var(--white-color);
      background-color: var(--danger-color);
    }
  }

  &__footer {
  }
}
</style>
