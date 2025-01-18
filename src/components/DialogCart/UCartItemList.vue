<script setup>
import { useCartStore } from '@/stores/CartStore'
import UCartItem from './UCartItem.vue'

const cartStore = useCartStore()
</script>

<template>
   <div v-auto-animate>
   <UCartItem 
   v-for="item in cartStore.cartItems"
   :key="item.id"
   :title="item.title"
   :price="item.price"
   :image-url="item.imageUrl"
   @on-click-remove="() => cartStore.removeFromCart(item)"
   />
</div>
</template>