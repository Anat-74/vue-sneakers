import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useCartStore } from '@/stores/CartStore'

const url = 'https://f1472ab18bd3ee1f.mokky.dev/orders'

const isCreating = ref(false)

export const useCreateOrderStore = defineStore('createOrderStore', () => {
   const cartStore = useCartStore()

   const orderId = ref(null)

   const createOrder = async () => {
      try {
         isCreating.value = true
         const { data } = await axios.post(`${url}`, {
           items: cartStore.cartItems,
           totalPrice: cartStore.totalPrice
         })
         cartStore.cartItems = []
         orderId.value = data.id
       } catch (err) {
         console.debug(err)
      } finally {
         isCreating.value = false
       }
   }

   const buttonDisabled = computed(
      () => isCreating.value || cartStore.cartItems.length === 0)

   return {
      createOrder,
      orderId,
      buttonDisabled
   }
})