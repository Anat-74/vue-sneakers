<script setup>
import UCard from '@/components/UCard.vue';

defineProps({
   orders: {
      type: Array,
      required: true,
   }
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>

<UCard 
      v-for="order in orders"
      :key="order.id"
      :title="order.title" 
      :imageUrl="order.imageUrl" 
      :price="order.price"
      :isFavorite="order.isFavorite"
      :isAdded="order.isAdded"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
/>
</template>

<style lang="scss" scoped>

</style>