import { defineStore } from 'pinia'
import { useFetchItemsStore } from './FetchItemsStore'
import { onMounted } from 'vue'
import axios from 'axios'

const url = 'https://f1472ab18bd3ee1f.mokky.dev/favorites'

export const useFetchFavoritesStore = defineStore('fetchFavoritesStore', () => {
   const fetchItemsStore = useFetchItemsStore()

   const fetchFavorites = async () => {
      try {
        const { data: favorites } = await axios.get(`${url}`)
        fetchItemsStore.items = fetchItemsStore.items.map((item) => {
           const favorite = favorites.find((element) => element.item_id === item.id)
           console.log(favorite)
          if (!favorite) {
            return item
           }
          return {
            ...item,
            isFavorite: true,
            favoriteId: favorite.id
          }
        })
         console.log(fetchItemsStore.items)
      } catch (err) {
        console.debug(err)
      }
    }

    onMounted(async () => {
      // await fetchFavorites()
    
      // const localCartItems = localStorage.getItem('cartItems')
      // cartItems.value = localStorage ? JSON.parse(localCartItems) : [];
    
      // items.value = items.value.map((item) => ({
      //    ...item,
      //    isAdded: cartItems.value.some(cartItem => cartItem.id === item.id)
      // }))
    })
   
   return {
      fetchFavorites
   }
})
