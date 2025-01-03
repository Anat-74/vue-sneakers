import { ref } from 'vue';
import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'https://f1472ab18bd3ee1f.mokky.dev/orders'

export const usePageOrdersStore = defineStore('pageOrdersStore', () => {

   const orders = ref([])
   const loader = ref(false)

   const fetchOrders = async () => {
      try {
         loader.value = true
         const { data } = await axios.get(`${url}`)
         orders.value = data.reduce((prev, obj) => [...prev, ...obj.items], [])
         loader.value = false
      } catch (err) {
         console.debug(err)
      }
   }

   return {
      fetchOrders,
      orders,
      loader
   }
})