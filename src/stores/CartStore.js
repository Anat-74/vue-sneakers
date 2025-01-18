import { defineStore } from 'pinia'
import { computed, ref, watch, onMounted } from 'vue'
import { useFetchItemsStore } from './FetchItemsStore'

export const useCartStore = defineStore('cartStore', () => {
   const fetchItemsStore = useFetchItemsStore()
   
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

   const onClickAddOrRemove = (item) => {
      if (!item.isAdded) {
        addToCart(item)
      } else {
         removeFromCart(item)
       }
   }

   onMounted(async() => {
      const localCartItems = localStorage.getItem('cartItems')
      cartItems.value = localCartItems ? JSON.parse(localCartItems) : []
      await fetchItemsStore.fetchItems()
         fetchItemsStore.items = fetchItemsStore.items.map((item) => ({
       ...item,
            isAdded: cartItems.value.some((cartItem) => cartItem.id === item.id)
     }))
   })
   
   watch(cartItems,
        async () => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
      },
     { deep: true }
   )

   watch(cartItems,
      () => {
         fetchItemsStore.items = fetchItemsStore.items.map((item) => ({
            ...item,
            isAdded: false
         }))
      }
   )

   return {
      cartItems,
      totalPrice,
      vatPrice,
      removeFromCart,
      addToCart,
      onClickAddOrRemove
   }
})