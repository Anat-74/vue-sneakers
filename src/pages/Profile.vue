<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';
import UOrderList from '@/components/UOrderList.vue';

const orders = ref([])

const fetchOrder = async () => {
   try {
   const { data } =  await axios.get('https://f1472ab18bd3ee1f.mokky.dev/orders')
   orders.value = data.reduce((prev, obj) => [...prev, ...obj.items], [])
   } catch (error) {
      console.debug(error)
   }
}

onMounted(async () => {
   await fetchOrder()
})
</script>

<template>
   <section class="orders">
      <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
      <h2 class="orders__title">Мои заказы</h2>
   <UOrderList 
      :orders="orders"
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