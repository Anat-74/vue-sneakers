<script setup>
import { ref } from 'vue';
// import { useDarkMode } from '@/composables/DarkMode'
// const { darkMode } = useDarkMode()
const model = defineModel()

   const getInitialDarkMode = () => {
      const userPreference = localStorage.getItem('darkMode')
      return userPreference === 'true' ? true : false
    }

    const darkMode = ref(getInitialDarkMode())
</script>

<template>
  <div class="theme">
    <input 
    @input="model" 
    :checked="darkMode" 
    id="switcher" 
    type="checkbox" 
    class="theme__input" />
    <label for="switcher" class="theme__label"></label>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  position: relative;
  width: toRem(88);
  height: toRem(29);
  border-radius: toRem(25);
  background-color: transparent;

  @media (max-width: $tablet) {
    width: toRem(84);
    height: toRem(25);
  }

  &__input {
    width: toRem(80);
    height: toRem(29);
    border-radius: toRem(25);
    appearance: none;
    outline: none;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: 20;
      top: 50%;
      transform: translateY(-50%);
      font-size: toRem(16);
    }

    &::before {
      content: '🌙';
      left: toRem(8);
      top: toRem(16);
    }

    &::after {
      content: '🌞';
      right: toRem(8);
      top: toRem(16);
    }

    &:checked + label {
      left: toRem(8);
      right: toRem(42);
      transition:
        left 0.3s,
        right 0.3s;
    }

    &:not(:checked) + label {
      left: toRem(42);
      right: toRem(8);
      transition:
        left 0.3s,
        right 0.3s,
        background-color 0.1s;
    }

    &:checked {
      background-color: rgb(245 245 245 / 0.1);
      border: 1px solid var(--grey-color);
    }

    &:not(:checked) {
      background-color: rgb(245 245 245 / 0.8);
      border: 1px solid var(--grey-color);
    }

    &:not(:checked) + label {
      background-color: var(--white-color);
    }

    &:checked + label {
      background-color: #333333;
    }

    @media (max-width: $tablet) {
      width: toRem(75);
      height: toRem(25);

      &::before,
      &::after {
        content: '';
        font-size: toRem(14);
      }

      &::before {
        content: '🌙';
        left: toRem(8);
        top: toRem(15);
        font-size: toRem(14);
      }

      &::after {
        content: '🌞';
        right: toRem(8);
        top: toRem(15);
        font-size: toRem(14);
      }
    }
  }

  &__label {
    position: absolute;
    z-index: 10;
    top: toRem(6);
    bottom: 0;
    border-radius: toRem(20);
  }
}
</style>
