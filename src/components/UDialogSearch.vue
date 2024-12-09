<script setup>
import { inject, ref } from 'vue'
import { useFetchItemsStore } from '@/stores/FetchItemsStore'

import UInput from '@/components/UHomeInput.vue'
import USelect from '@/components/UHomeSelect.vue'
import UButton from '@/components/UButton.vue'

const { isOpenMenu } = inject('toggle')

const fetchItemsStore = useFetchItemsStore()

const message = ref('')
</script>
<template>
  <dialog id="searchNavigation" aria-label="Поиск" class="dialog-search">
    <div :class="['dialog-search__items', { isopen: isOpenMenu }]">
      <span class="dialog-search__message">{{ message }}</span>
      <form @submit.prevent class="dialog-search__form">
        <UInput 
        v-model="message" 
        :placeholder="$t('main.inputPlaceholder')"
        label="Brand..." />
        <USelect v-model="fetchItemsStore.filters.sortBy" name="sneakers" />
      </form>
      <form method="dialog">
        <UButton close="close" type="submit" class="dialog-search__btn-close" />
      </form>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
@media (min-width: $tablet) {
  .dialog-search {
    display: none;
  }
}
@media (max-width: $tablet) {
  .dialog-search {
    width: 100%;
    position: fixed;
    z-index: 100;
    bottom: toRem(62);
    padding-inline: toRem(15);
    padding-block: toRem(10);
    background-color: var(--transparent-color);
    transition:
      display 0.1s allow-discrete,
      overlay 0.1s allow-discrete,
      opacity 0.5s;

    &[open] {
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }

    &__items {
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      margin-block-start: toRem(-54);
      background-color: var(--transparent-color);

      &.isopen {
        display: none;
      }
    }

    &__message {
      justify-self: end;
      background-color: rgba(255 255 255/0.3);
      font-size: toRem(18);
      border-radius: toRem(4);
      font-weight: 500;
      color: var(--orange-color);
    }

    &__form {
      position: relative;
      justify-self: end;
      display: flex;
      background-color: var(--transparent);
    }

    &__btn-close {
      @include adaptiveValue('padding-block', 23, 17);
      border: 2px solid rgba(165 207 140 / 0.4);
      border-left: 1px;
      border-radius: 0 8px 8px 0;
      padding-inline: toRem(14);
      margin-inline-start: 3px;

      &::before,
      &::after {
        width: toRem(16);
        right: toRem(6);
        background-color: rgba(165 207 140 / 0.5);
      }
    }
  }
}
@media (max-width: $mobile) {
  .dialog-search__items {
    margin-block-start: toRem(0);
  }
}
</style>
