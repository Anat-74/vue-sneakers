<script setup>
import { onMounted } from 'vue'
import { useFetchOrdersStore } from '@/stores/FechOrdersStore';
import UOrderList from '@/components/UOrderList.vue';

const fetchOrdersStore = useFetchOrdersStore()

onMounted(async () => {
   await fetchOrdersStore.fetchOrders()
})
</script>

<template>
   <section class="orders">
      <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
      <h2 class="orders__title">Мои заказы</h2>
   <UOrderList 
      :orders="fetchOrdersStore.orders"
      isOrders
      />
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
   }
   .fa-arrow-left {
         width: toRem(22);
         height: toRem(20);
         color: var(--orange-color);
         margin-block-end: toRem(16);
      }
</style>