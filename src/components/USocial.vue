<script setup>
</script>

<template>
   <div class="social">
      <a 
      href="https://www.viber.com/ru"
      class="social__link"
      >
      <font-awesome-icon icon="fa-brands fa-viber"
      />
   </a>
      <a 
      href="https://web.telegram.org"
      class="social__link"
      >
      <font-awesome-icon icon="fa-brands fa-telegram"
      />
   </a>
      <a 
      href="https://www.instagram.com"
      class="social__link"
      >
      <font-awesome-icon icon="fa-brands fa-instagram"
      />
   </a>
      <a 
      href="https://vk.com"
      class="social__link"
      >
      <font-awesome-icon icon="fa-brands fa-vk"
      />
   </a>
   </div>
</template>

<style lang="scss" scoped>
   .svg-inline--fa {
      @include adaptiveValue("height",32 , 26);
   }

   .fa-telegram {
      color: #0088cc;
   }

   .fa-viber {
      color: #8c60c3;
   }

   .fa-instagram {
      color: #dd2a7b;
   }

   .fa-vk {
      color: #00bfff;
   }

</style>