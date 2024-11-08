<script setup>
import UCard from '@/components/UCard.vue'

defineProps({
   items: {
      type: Array,
      required: true,
   },
   isFavorites: {
      type: Boolean,
      required: false
    }
})

const emit = defineEmits(['addToFavorite', 'addToCart'])

</script>

<template>
   <div class="card-list" 
      v-auto-animate
   >
      <UCard 
      v-for="item in items"
      :key="item.id"
      :title="item.title" 
      :imageUrl="item.imageUrl" 
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      />
   </div>

</template>

<style lang="scss" scoped>
.card-list {
   @include adaptiveValue("gap", 38, 12);
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(toRem(240), 1fr));
}
</style>