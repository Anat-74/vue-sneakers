<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

const scrollButton = useTemplateRef('scroll-button');

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

onMounted(() => {
  scrollButton.value.addEventListener('click', topFunction);
  window.addEventListener('scroll', scrollFunction);
});

onUnmounted(() => {
  if (scrollButton.value) {
    scrollButton.value.removeEventListener('click', topFunction);
  }
  window.removeEventListener('scroll', scrollFunction);
});
</script>

<template>
      <button
      ref="scroll-button"
      title="Вернуться наверх"
      type="button"
      class="scroll-btn"
      >
      <font-awesome-icon icon="fa-chevron-right" />
   </button>
</template>

<style lang="scss" scoped>
.scroll-btn {
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