<script setup>
const props = defineProps({
   percent: {
      type: Number,
      required: true
   },
   color: {
      type: String,
      default: 'primary'
   }
})
</script>

<template>
     <div class="progress-circle">
    <span class="progress-circle-percent" :style="[{'color': `var(--${color})`}]">{{percent}}%</span>
    <svg width="120" height="120" viewBox="0 0 120 120" class="progress-circle-svg">
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color}-hover)`"
        stroke-width="12" />

      <circle
        class="progress-circle-line"
        :style="[{'stroke-dashoffset': `calc(100 - ${percent})`}]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="12"
        pathLength="100" 
        />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/style.scss';
.progress {
  &-circle {
    position: relative;
    margin-bottom: toRem(20);
    width: toRem(120);
    height: toRem(120);
    &-svg {
      transform: rotate(-90deg);
    }
    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
    &-line {
      stroke-dasharray: 100;
      transition: .5s;
    }
  }
}
</style>