<script setup>
import UCard from '@/components/UCard.vue';

defineProps({
   orders: {
      type: Array,
      required: true,
   },
   isOrders: {
      type: Boolean,
      required: false
   }
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>
   <div class="order-list">
   <UCard 
      v-for="order in orders"
      :key="order.id"
      :title="order.title" 
      :imageUrl="order.imageUrl" 
      :price="order.price"
      :isFavorite="order.isFavorite"
      :isAdded="order.isAdded"
      :onClickFavorite="isOrders ? null : () => emit('addToFavorite', order)"
      :onClickAdd="isOrders ? null :() => emit('addToCart', order)"
   />
</div>
</template>

<style lang="scss" scoped>
.order-list {
   @include adaptiveValue("gap", 38, 12);
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(toRem(240), 1fr));
}
</style>