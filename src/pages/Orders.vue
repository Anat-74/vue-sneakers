<script setup>
import { onMounted } from 'vue'
import { usePageOrdersStore } from '@/stores/PageOrdersStore';
import UOrderList from '@/components/UOrderList.vue';

const pageOrdersStore = usePageOrdersStore()

onMounted(async () => {
   await pageOrdersStore.fetchOrders()
})
</script>

<template>
   <section class="orders">
      <router-link to="/">
         <font-awesome-icon icon="fa-solid fa-arrow-left" />
         </router-link>
      <h2 class="orders__title">Мои заказы</h2>
   <UOrderList 
      v-if="pageOrdersStore.orders.length"
      :orders="pageOrdersStore.orders"
      isOrders
      />
      <div v-else
      class="orders__no-orders">
   <p
   class="orders__text">
      У Вас пока нет заказов
   </p>
   <img 
   width="44" 
   height="44"
   src="/image/emoji-1.avif" alt="emoji"> 
</div>
   </section>
</template>

<style lang="scss" scoped>
   .orders {
      @media (max-width:$tablet){
         padding-block-end: toRem(90);
      }

      &__title {
         color: var(--grey-color);
         margin-block-end: toRem(16);
      }

      &__no-orders {
         display: grid;
         justify-items: center;
      }

      &__text {
         font-size: toRem(20);
         font-family: var(--font-family);
         color: var(--danger-color);
         letter-spacing: 1px;
         margin-block-end: toRem(9);
      }
   }
   .fa-arrow-left {
         width: toRem(22);
         height: toRem(20);
         color: var(--orange-color);
         margin-block-end: toRem(16);
      }
</style>