<template>
   <div>
   <h1>{{ $t('creamPage.title') }}</h1>
   <p>{{ $t('creamPage.description') }}</p>
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