import { defineStore } from 'pinia'
import { useFetchItemsStore } from './FetchItemsStore'
import axios from 'axios'

const url = 'https://f1472ab18bd3ee1f.mokky.dev/favorites'

export const useFetchFavoritesStore = defineStore('fetchFavoritesStore', () => {
   const fetchItemsStore = useFetchItemsStore()

   const fetchFavorites = async () => {
      try {
         const { data: favorites } = await axios.get(`${url}`)
        fetchItemsStore.items = fetchItemsStore.items.map((item) => {
           const favorite = favorites.find((el) => el.item_id === item.id)
          if (!favorite) {
            return item
           }
          return {
            ...item,
            isFavorite: true,
            favoriteId: favorite.id
          }
        })
      } catch (err) {
        console.debug(err)
      }
   }

   return {
      fetchFavorites
   }
})
