<script setup>
import { useDarkMode } from '@/Composables/darkMode'
const { darkMode } = useDarkMode()
const model = defineModel()
</script>

<template>
      <div class="theme"
      >
         <input
         @input="model"
         :checked=darkMode
         id="switcher" 
         type="checkbox"
         class="theme__input" 

          >
         <label 
         for="switcher"
         class="theme__label" 
         ></label>
      </div>
</template>

<style lang="scss" scoped>

   .theme {
			position: relative;
			width: toRem(84);
			height: toRem(25);
			border-radius: toRem(25);
         background-color: transparent;

         &__input {
			width: toRem(75);
			height: toRem(25);
			border-radius: toRem(25);
         appearance: none;
			outline: none;
			cursor: pointer;

      &::before,
      &::after{
         content: '';
			position: absolute;
			z-index: 20;
			top: 50%;
			transform: translateY(-50%);
         font-size: toRem(14);
         }

         &::before {
			content: "🌙";
			left: toRem(8);
			top: toRem(15);
		}

      &::after {
			content: "🌞";
			right: toRem(8);
			top: toRem(15);
		}

		&:checked+label {
			left: toRem(8);
			right: toRem(42);
			transition: left 0.3s, right 0.3s;
		}

		&:not(:checked)+label {
			left: toRem(42);
			right: toRem(8);
			transition: left .3s, right .3s, background-color .1s;
		}

      &:checked {
			background-color: rgb(245 245 245 / .1);
         border: 1px solid var(--grey-color);
		}

		&:not(:checked) {
			background-color: rgb(245 245 245 / .1);
         border: 1px solid var(--grey-color);
		}

      
		&:not(:checked)+label {
			background-color: var(--white-color);
		}

      &:checked+label {
         background-color: #333333;
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