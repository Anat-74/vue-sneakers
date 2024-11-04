<script setup>
   defineProps ({
   maxWidth: {
      type: String, 
      default: '300px'
   },
   percent: {
      type: Number,
      required: true
   },
   color: {
      type: String,
      default: 'blue'
   }
})
</script>

<template>
<div class="progress-container" :style="[{'width' : maxWidth}]">
   <span class="progress-percent" :style="[{'color': `var(--${color})`}]"></span>
   <div class="progress" :style="[{'backgroundColor': `var(--${color}-hover)`}]">
      <div class="progress-bar" :style="[{'width' : `${percent}%`}, {'background': `var(--${color}-color)`}]">
      </div>
   </div>
</div>
</template>

<style lang="scss" scoped>

.progress {
  height: toRem(5);
  border-radius: toRem(4);
  &-container {
    margin-bottom: toRem(10);
    overflow: hidden;
  }
  &-bar {
    background-color: var(--main-color);
    height: 100%;
    border-radius: toRem(4);
    transition: .5s;
  }
  &-percent {
    display: block;
    text-align: center;

    font-weight: bold;
    font-size: toRem(17);
    margin-bottom: toRem(10);
  }
}
</style>