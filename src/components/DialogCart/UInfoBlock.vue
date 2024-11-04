<script setup>

defineProps({
      imageUrl: String,
      title: String,
      description: String
   })
</script>

<template>
   <div class="info-block">
   <img 
   :src="imageUrl" 
   :alt="title"
   width="100"
   height="100"
   class="info-block__image"
   >
   <h2 class="info-block__title">{{ title }}</h2>
   <p class="info-block__descr">{{ description }}</p>
</div>
</template>

<style lang="scss" scoped>

.info-block {
   max-width: toRem(285);
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-inline: auto;
   margin-block: auto;

   &__image {
      margin-block-end: toRem(20);
   }

   &__title {
   margin-block-end: toRem(10);
   line-height: 1.2;
   font-weight: 600;
}

&__descr {
   text-align: center;
   font-size: toRem(16);
   line-height: 1.5;
   font-weight: 400;
   color: var(--grey-color);
}
}

</style>