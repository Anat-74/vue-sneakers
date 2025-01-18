<script setup>
import { onMounted,  useTemplateRef } from 'vue'
import { useCloseDialogElement } from '@/composables/CloseDialogElement'

import UButton from '@/components/UButton.vue'
import Footer from '@/components/Layout/Footer.vue'

const dialogElement = useTemplateRef('dialog-contacts')
onMounted(() => {
  useCloseDialogElement(dialogElement.value)
})
</script>

<template>
  <UButton 
  onclick="window.dialogContacts.showModal()" 
  burger="burger" 
  class="open-button"
  >
    <span></span>
    <span class="visually-hidden">Open navigation menu</span>
  </UButton>
  <dialog 
  ref="dialog-contacts"
  id="dialogContacts" 
  aria-label="Контакты" 
  class="dialog-contacts">
    <div class="dialog-contacts__items">
      <form method="dialog">
      </form>
      <Footer class="dialog-contacts__footer" />
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog-contacts {
  @include adaptiveValue('width', 855, 290);
  min-height: 100dvh;
  margin-inline-end: 0;
  opacity: 0;
  transition:
    display .1s allow-discrete,
    overlay .1s allow-discrete,
    opacity .2s;

  &[open] {
    opacity: 1;
    transition: opacity .8s;

    @starting-style {
      opacity: 0;
    }
  }

  &::backdrop {
    opacity: 0;
  }

  &__items {
    position: relative;
  }

  &__footer {
    display: block;
  }
}
</style>
