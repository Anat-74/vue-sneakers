<script setup>
import { inject } from 'vue';
import UCartItem from './UCartItem.vue'

const { cartItems, removeFromCart } = inject('cart')
</script>

<template>
   <div v-auto-animate>
   <UCartItem 
   v-for="item in cartItems"
   :key="item.id"
   :title="item.title"
   :price="item.price"
   :image-url="item.imageUrl"
   @on-click-remove="() => removeFromCart(item)"
   />
</div>
</template>