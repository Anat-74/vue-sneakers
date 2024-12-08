<script setup>
import { onMounted, useTemplateRef } from 'vue'

import { useCloseDialogElement } from '@/composables/CloseDialogElement'
import { useCreateOrderStore } from '@/stores/CreateOrderStore'
import { useCartStore } from '@/stores/CartStore'

import UInfoBlock from './UInfoBlock.vue'
import UCartItemList from './UCartItemList.vue'
import UButton from '@/components/UButton.vue'

const createOrderStore = useCreateOrderStore()
const cartStore = useCartStore()

const dialogElement = useTemplateRef('dialog-cart')

onMounted(() => {
  useCloseDialogElement(dialogElement.value)
})
</script>

<template>
  <dialog
    @click="createOrderStore.orderId = false"
    ref="dialog-cart"
    id="cartDialog"
    aria-labelledby="cartDialog-name"
    class="dialog-cart"
  >
    <div class="dialog-cart__items">
      <form class="dialog-cart__form" method="dialog">
        <h2 class="dialog-cart__title" id="cartDialog-name">{{ $t('cart.cartTitle') }}</h2>
        <UButton
          @click="createOrderStore.orderId = false"
          close="close"
          type="submit"
          class="dialog-cart__btn-close"
        />
      </form>

      <UInfoBlock
        v-if="!cartStore.totalPrice && !createOrderStore.orderId"
        image-url="/image/package-icon.avif"
        :title="$t('cart.emptyCartTitle')"
        :description="$t('cart.emptyCartDescription')"
      />
      <UInfoBlock
        v-if="createOrderStore.orderId"
        image-url="/image/order-success-icon.avif"
        :title="$t('cart.orderPlacedTitle')"
        :description="$t('cart.orderPlacedDescription', {orderId: createOrderStore.orderId})"
      />

      <UCartItemList v-if="cartStore.totalPrice" class="dialog-cart__item-list" />
      <div v-if="cartStore.totalPrice" class="dialog-cart__bottom">
        <h3 class="bottom__subtitle">{{ $t('cart.cartTotal') }}</h3>
        <span class="bottom__price">{{ cartStore.totalPrice }} {{ $t('cart.cartCurrency') }}</span>
        <h3 class="bottom__subtitle">{{ $t('cart.cartTax') }}</h3>
        <span class="bottom__price">{{ cartStore.vatPrice }} {{ $t('cart.cartCurrency') }} </span>
        <UButton
          @click="createOrderStore.createOrder"
          :label="$t('cart.cartPlaceAnOrder')"
          size="large"
          :disabled="createOrderStore.buttonDisabled"
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
  &[open] {
   margin-inline-end: 0px;
    opacity: 1;
    transition: opacity .5s ease-out;

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
