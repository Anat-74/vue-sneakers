<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

import UCardList from '@/components/UCardList.vue';

const favorites = ref([])

onMounted(async () => {
   try {
      const {data} = await axios.get('https://f1472ab18bd3ee1f.mokky.dev/favorites?_relations=items')
   favorites.value = data.map(obj => obj.item)

   } catch (err) {
      console.log(err)
   }
})
</script>

<template>
   <section 
    class="favorite">
         <router-link to="/">
            назад
         </router-link>
   <h2>Мои закладки</h2>
   <UCardList
   :items="favorites" 
   is-favorites
   class="favorite" 
   />
</section>
</template>

<style lang="scss" scoped>
   .favorite {
      @media (max-width:$tablet){
         padding-block-end: toRem(40);
      }
   }
</style>