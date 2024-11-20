import { defineStore } from 'pinia'
import { useFetchFavoritesStore } from './FetchFavoritesStore'
import { ref, reactive, watch, onMounted } from 'vue'
import axios from 'axios'
const url = 'https://f1472ab18bd3ee1f.mokky.dev/items'


export const useFetchItemsStore = defineStore('fetchItemsStore', () => {
   const fetchFavoritesStore = useFetchFavoritesStore()
   const items = ref([])

   const filters = reactive({
      sortBy: 'title',
      searchQuery: ''
   })
   
   const fetchItems = async () => {
      try {
        const params = {
          sortBy: filters.sortBy
        }
    
        if (filters.searchQuery) {
          params.title = `*${filters.searchQuery}*`
        }
    
        const { data } = await axios.get(`${url}`, {params})
        items.value = data.map((obj) => ({
           ...obj,
           isFavorite: false,
           isAdded: false,
           favoriteId: null
        }))
        console.log(items.value)
      } catch (err) {
        console.debug(err)
       }
   }

   onMounted(async () => {
      await fetchItems(),
      await fetchFavoritesStore.fetchFavorites()
   })

   watch(filters, fetchItems)

   return {
      items,
      filters,
      fetchItems
   }
})