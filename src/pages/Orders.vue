<script setup>
import { onMounted } from 'vue';
import { usePageOrdersStore } from '@/stores/PageOrdersStore';
import ULoader from '@/components/ULoader.vue'

const pageOrdersStore = usePageOrdersStore()

onMounted(async () => {
   await pageOrdersStore.fetchOrders()
})

import UCardList from '@/components/UCardList.vue'
</script>

<template>
   <section class="orders">
      <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
      <h2 class="orders__title">{{ $t('ordersPage.title') }}</h2>
      <ULoader v-if="pageOrdersStore.loader" />
   <UCardList 
      v-if="pageOrdersStore.orders.length"
      :items="pageOrdersStore.orders"
      is-favorites
      />
      <div v-else
      class="orders__no-orders">
   <p
   class="orders__text">
   {{ $t('ordersPage.text') }}
   </p>
   <img 
   width="44" 
   height="44"
   src="/image/emoji-1.avif" alt="emoji"> 
</div>
   </section>
</template>

<style lang="scss" scoped>
   .orders {
      @media (max-width:$tablet){
         padding-block-end: toRem(90);
      }

      &__title {
         color: var(--grey-color);
         margin-block-end: toRem(16);
      }

      &__no-orders {
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