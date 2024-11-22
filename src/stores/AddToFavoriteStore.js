import { defineStore } from 'pinia'
import axios from 'axios'

const urlPost = 'https://f1472ab18bd3ee1f.mokky.dev/favorites'
const urlDelete = 'https://f1472ab18bd3ee1f.mokky.dev/favorites/'

export const useAddToFavoriteStore = defineStore('addToFavoriteStore', () => {

   const addToFavorite = async (item) => {
      try {
        if (!item.isFavorite) {
          const obj = {
            item_id: item.id
          }
          item.isFavorite = true
          const { data } = await axios.post(`${urlPost}`, obj)
           item.favoriteId = data.id
        } else {
          item.isFavorite = false
          await axios.delete(`${urlDelete}${item.favoriteId}`)
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
