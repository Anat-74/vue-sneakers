import { defineStore } from 'pinia'
import { ref, reactive, watch, onMounted } from 'vue'
import axios from 'axios'

const url ='https://f1472ab18bd3ee1f.mokky.dev/items'


export const useFetchItemsStore = defineStore('fetchItemsStore', () => {

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
          favoriteId: null,
           isAdded: false
        }))
      } catch (err) {
        console.debug(err)
       }
   }

   onMounted(async () => {
      await fetchItems()
   })

   watch(filters, fetchItems)

   return {
      items,
      filters,
      fetchItems
   }
})