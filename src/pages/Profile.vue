<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';

import UOrderList from '@/components/UOrderList.vue';

const orders = ref([])

const fetchOrder = async () => {
   try {
   const { data } =  await axios.get('https://f1472ab18bd3ee1f.mokky.dev/orders')
   console.log(data)
   orders.value = data.reduce((prev, obj) => [...prev, ...obj.items], [])
   console.log(orders.value)
   
   } catch (error) {
      console.debug(error)
   }
}

onMounted(async () => {
   await fetchOrder()
   })
</script>

<template>
   <h2>Мои заказы</h2>
   <div
   >
   <UOrderList 
      :orders="orders"
      />
   </div>
</template>
