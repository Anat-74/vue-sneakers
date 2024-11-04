<script setup>
import { ref, onMounted, inject } from 'vue';
import axios from 'axios'

import UCardList from '@/components/UCardList.vue';

const { isOpenMenu } = inject('toggle')

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
    :class="['favorite', {favorite_isopen: isOpenMenu}]"
   >
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
         transition: transform .3s linear, filter .3s;

         &_isopen {
            @media (prefers-reduced-motion: no-preference) { 
            transform: scale(.985);
         }
         filter: blur(12px);
         opacity: .7;
         transition: transform .3s linear filter .3s;
            }
      }
   }
</style>