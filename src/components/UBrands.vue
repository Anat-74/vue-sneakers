<script setup>
import { ref } from 'vue';
const brands = ref([
   { name: 'Addidas-brand', src: '/image/brands/addidas-removebg-preview.avif' },
   { name: 'Nike-brand', src: '/image/brands/nike-removebg-preview.avif' },
   { name: 'Puma-brand', src: '/image/brands/puma-removebg-preview.avif' },
   { name: 'Reebock-brand', src: '/image/brands/reebok-removebg-preview.avif' },
   { name: 'Fila-brand', src: '/image/brands/fila-removebg-preview.avif' },
   { name: 'Asics-brand', src: '/image/brands/asics-removebg-preview.avif' },
   {name: 'Saucony-brand', src: '/image/brands/saucony-removebg-preview.avif'}
])
</script>

<template>
   <ul class="brands">
      <li
      v-for="brand in brands"
      :key="brand.name"
      >
         <img 
         :src="brand.src"
         :alt="brand.name"
         width="70"
         height="70"
         >
      </li>
   </ul>
</template>

<style lang="scss" scoped>

.brands {
        li {
         img {
            @media (max-width:$tablet){
               @include adaptiveValue("width", 62, 48);
               @include adaptiveValue("height", 62, 48);
            }
         }
    }
}
</style>