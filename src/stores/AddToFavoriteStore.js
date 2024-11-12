import { defineStore } from 'pinia'
import axios from 'axios'

export const useAddToFavoriteStore = defineStore('addToFavoriteStore', () => {
   
   const addToFavorite = async (item) => {
      try {
        if (!item.isFavorite) {
          const obj = {
            item_id: item.id
          }
    
          item.isFavorite = true
    
          const { data } = await axios.post('https://f1472ab18bd3ee1f.mokky.dev/favorites', obj)
           item.favoriteId = data.id
 
        } else {
          item.isFavorite = false
          await axios.delete(`https://f1472ab18bd3ee1f.mokky.dev/favorites/${item.favoriteId}`)
          item.favoriteId = null
         }
      } catch (err) {
        console.debug(err)
      }
    }
   
   return {
      addToFavorite
   }
})
