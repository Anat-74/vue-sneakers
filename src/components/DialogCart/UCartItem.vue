<script setup>
import UButton from '@/components/UButton.vue'

defineProps({
   id: Number,
   imageUrl: Array,
   title: String,
   price: Number,
})

const emit = defineEmits(['onClickRemove'])
</script>

<template>
<article class="cart-item">
   <img 
      :src="imageUrl[0]" 
      :alt="title"
      width="85" 
      height="80" 
      class="cart-item__image" 
      >
      <p class="cart-item__descr">{{ $t('card.cardTitle') }} {{title}}</p>
      <span class="cart-item__price">{{price}} руб.</span>
      <UButton 
      @click="emit('onClickRemove')"
       size="small"
       type="button"
       class="cart-item__btn" 
      />
   </article>
</template>

<style lang="scss" scoped>
.cart-item {
   padding-inline: toEm(16, 15);
   padding-block: toEm(18, 15);
   border-radius: toEm(20, 15);
   box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.07);

   display: grid;
   grid-template: repeat(2, auto) / auto 1fr auto;
   align-items: end;
   row-gap: toEm(7, 15);
   grid-template-areas: 
   "img descr descr"
   "img price btn"
   " ..   .. btn"
   ;
   &:not(:last-child) {
      margin-block-end: toEm(20, 15);
      }

&__image {
   grid-area: img;
   margin-inline-end: toEm(20, 15);
}

&__descr {
   grid-area: descr;
   font-weight: 400;
}

&__price {
   grid-area: price;
   font-weight: 600;
   letter-spacing: .5px;
   color: var(--text-color);
}

&__btn {
   grid-area: btn;
}
}
</style>