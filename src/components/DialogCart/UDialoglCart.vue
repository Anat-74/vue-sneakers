<script setup>
import { computed, inject, ref, onMounted } from 'vue'
import axios from 'axios'
import { useCloseDialogElement } from '@/Composables/closeDialogElement'

import UInfoBlock from './UInfoBlock.vue'
import UCartItemList from './UCartItemList.vue'
import UButton from '@/components/UButton.vue'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const { cartItems } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://f1472ab18bd3ee1f.mokky.dev/orders', {
      items: cartItems.value,
      totalPrice: props.totalPrice
    })
     cartItems.value = []
     orderId.value = data.id
   } catch (err) {
    console.log(err)
  } finally {
    isCreating.value = false
  }
}
const buttonDisabled = computed(() => isCreating.value || cartItems.value.length === 0)

onMounted(() => {
   const dialogElement = document.querySelector('.dialog-cart')
   useCloseDialogElement(dialogElement)
})

</script>

<template>
  <dialog 
      @click="orderId = false"
      id="cartDialog" 
      aria-labelledby="cartDialog-name" 
      class="dialog-cart">
    <div class="dialog-cart__items">
      <form class="dialog-cart__form" method="dialog">
        <h2 class="dialog-cart__title" id="cartDialog-name">Корзина</h2>
        <UButton
          @click="orderId = false"
          close="close"
          type="submit"
          class="dialog-cart__btn-close"
        />
      </form>

      <UInfoBlock
        v-if="!totalPrice && !orderId"
        image-url="/image/package-icon.avif"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
      />
      <UInfoBlock
        v-if="orderId"
        image-url="/image/order-success-icon.avif"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
      />

      <UCartItemList v-if="totalPrice" class="dialog-cart__item-list" 
      />
      <div v-if="totalPrice" class="dialog-cart__bottom">
        <h3 class="bottom__subtitle">Итого:</h3>
        <span class="bottom__price">{{ totalPrice }} руб.</span>
        <h3 class="bottom__subtitle">Налог 5%:</h3>
        <span class="bottom__price">{{ vatPrice }} руб. </span>
        <UButton
          @click="createOrder"
          label="Оформить заказ"
          size="large"
          :disabled="buttonDisabled"
          class="bottom__btn"
        />
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog-cart {
  @include adaptiveValue('width', 395, 270);
  min-height: 100dvh;
  margin-inline-end: 0;
  transition:
    min-height .2s,
    display .1s allow-discrete,
    overlay .1s allow-discrete,
    opacity .2s;
  opacity: 0;

  &[open] {
    opacity: 1;
    transition: opacity .4s ease-out;

    @starting-style {
      opacity: 0;
    }
  }

  &::backdrop {
    opacity: 0;
  }

  &__items {
    @include adaptiveValue('padding-inline', 22, 12);
    padding-block: toEm(25, 15);
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  &__form {
    display: flex;
    justify-content: space-between;
    margin-block-end: toEm(30, 15);
  }

  &__item-list {
    flex: 1 1 auto;
  }

  &__bottom {
    display: grid;
    grid-template-columns: [subtitle] 1fr [price] auto;
    align-items: center;
    row-gap: toEm(20, 15);
    column-gap: toEm(10, 15);
    margin-block-start: toEm(45, 15);
  }
}

.bottom {
  &__subtitle {
    grid-column: subtitle;
    position: relative;
    font-weight: 400;
  }

  &__price {
    grid-column: price;
    font-weight: 600;
    letter-spacing: toRem(0.7);
    color: var(--text-color);
  }
}
</style>
