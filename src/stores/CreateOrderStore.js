import { ref, watch, computed, inject } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useFetchItemsStore } from '@/stores/FetchItemsStore'

const isCreating = ref(false)

export const useCreateOrderStore = defineStore('createOrderStore', () => {
   const fetchItemsStore = useFetchItemsStore()
   const { cartItems, totalPrice } = inject('cart')

   const orderId = ref(null)

   const createOrder = async () => {
      try {
         isCreating.value = true
         const { data } = await axios.post('https://f1472ab18bd3ee1f.mokky.dev/orders', {
           items: cartItems.value,
           totalPrice: totalPrice.value
         })
         cartItems.value = []
         orderId.value = data.id
       } catch (err) {
         console.log(err)
       } finally {
          isCreating.value = false
       }
    }
   const buttonDisabled = computed(
      () => isCreating.value || cartItems.value.length === 0)

   watch(cartItems, () => {
      if (buttonDisabled.value) {
         fetchItemsStore.items = fetchItemsStore.items.map((item) => ({
            ...item,
            isAdded: false
            }))
         } 
      }
   )
   return {
      createOrder,
      orderId,
      buttonDisabled
   }
})