<script setup>
</script>

<template>
   <div>
   <h1>{{ $t('sneakersForManPage.title') }}</h1>
   <p>{{ $t('sneakersForManPage.description') }}</p>
</div>
</template>

<style lang="scss" scoped>
div {
   color: var(--text-color);
}
h1 {
   font-weight: 800;
}
p {
   font-size: toRem(18);
}
</style>
