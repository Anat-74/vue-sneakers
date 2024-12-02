<script setup>
import { onMounted, useTemplateRef } from 'vue';

const scrollButton = useTemplateRef('scroll-button')

onMounted(() => {
   scrollButton.value.addEventListener('click', topFunction)
   window.onscroll = function () {
      scrollFunction()
   }

function scrollFunction() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
   scrollButton.value.style.display = "block";
  } else {
   scrollButton.value.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}
})
</script>

<template>
      <button
      ref="scroll-button"
      title="Вернуться наверх"
      >
      <font-awesome-icon icon="fa-chevron-right" />
   </button>
</template>

<style lang="scss" scoped>
button {
   width: toRem(32);
   height: toRem(28);
   border-radius: toRem(6);
   background-color: var(--lime-color) !important;
   opacity: .3;

   svg {
   width: toRem(12);
   height: toRem(28);
   transform: rotate(-90deg);
   color: var(--white-color);
   background-color: transparent;
   }
}
</style>