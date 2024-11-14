<script setup>
import UButton from '@/components/UButton.vue'

defineProps({
   id: Number,
   imageUrl: String,
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
      <p class="cart-item__descr">{{title}}</p>
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
   @include adaptiveValue("padding-block-start",25 , 1);
   // position: relative;
   padding-inline: toEm(20, 15);
   padding-block-end: toEm(25, 15);
   border-radius: toEm(20, 15);
   border: 1px solid #F3F3F3;
   box-shadow: 0px toEm(6, 15) toEm(18, 15) toRem(5) hsla(0, 0%, 0%, 0.07);

   display: grid;
   grid-template: 1fr auto / auto 1fr auto;
   align-items: end;
   row-gap: toEm(8, 15);
   grid-template-areas: 
   "img descr descr"
   "img price btn"
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
   align-self: center;
   font-weight: 600;
   letter-spacing: .5px;
   color: var(--text-color);
}

&__btn {
   grid-area: btn;
}
}
</style>