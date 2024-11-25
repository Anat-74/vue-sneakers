import { defineStore } from 'pinia'
import axios from 'axios'

const postUrl = 'https://f1472ab18bd3ee1f.mokky.dev/favorites'
const deleteUrl = 'https://f1472ab18bd3ee1f.mokky.dev/favorites/'

export const useAddToFavoriteStore = defineStore('addToFavoriteStore', () => {

   const addToFavorite = async (item) => {
      try {
        if (!item.isFavorite) {
          const obj = {
             item_id: item.id,
             item
          }
          item.isFavorite = true
          const { data } = await axios.post(`${postUrl}`, obj)
           item.favoriteId = data.id
        } else {
          item.isFavorite = false
           await axios.delete(`${deleteUrl}${item.favoriteId}`)
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
