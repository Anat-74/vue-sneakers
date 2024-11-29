import { ref } from 'vue';
import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'https://f1472ab18bd3ee1f.mokky.dev/favorites'

export const usePageFavoritesStore = defineStore('pageFavoritesStore', () => {
   const favorites = ref([])
   const loader = ref(false)

   const pageFavorites = async () => {
      try {
         loader.value = true
         const { data } = await axios.get(`${url}`)
          favorites.value = data.map((obj) => ({
             ...obj.item
          }))
         loader.value = false
      } catch (err) {
         console.debug(err)
      }
   }

   return {
      pageFavorites,
      favorites,
      loader
   }
})