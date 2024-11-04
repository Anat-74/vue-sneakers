<script  setup>

const emit = defineEmits(['update:modelValue'])

defineProps({
   modelValue: String
})

const onChangeSelect = (e) => {
   emit('update:modelValue', e.target.value)
}

</script>

<template>
   <div class="select-wrapper">
 <select
 @change="onChangeSelect" 
 class="select"
   >
   <option disabled value="">Выбериет товар</option>
      <option value="name">По названию</option>
      <option value="price">По цене (дешевле)</option>
      <option value="-price">По цене (дороже)</option>
   </select> 
</div>
</template>

<style lang="scss" scoped>

.select-wrapper {
   position: relative;

   &::before,
      &::after{
         content: '';
         pointer-events: none;
         position: absolute;
         top: calc(45% - toRem(1));
			width: toRem(8);
			height: toRem(2);
			background-color: var(--grey-color);
      }
      &::before {
         right: toRem(12);
         transform: rotate(-125deg);
		}
		&::after {
         right: toRem(8);
         transform: rotate(125deg);
		}

   @media (max-width:$tablet){
      &::before,
      &::after{
			background-color: var(--lime-color);
      }

		&::after {
         left: toRem(11);
		}
   }
}

.select {
   @media (min-width:$tablet){
      font-size: toRem(17);
   }
      @include adaptiveValue("padding-block", 14, 10);
      width: toRem(195);
      border: 3px solid var(--whitesmoke-color);
      border-radius: toEm(14, 15);
      padding-inline: toEm(9, 15);
      color: var(--grey-color);
      outline: none;
      appearance: none;
      cursor: pointer;

      &:focus-visible {
         border: 2px solid var(--grey-color);
      }
      &:active {
         border: 2px solid var(--orange-color);
      }

      @media (max-width:$tablet){
      width: toRem(27);
      padding-inline: toRem(12);
      border: 2px solid var(--lime-color);
      border-inline-start: 1px solid var(--lime-color);
      border-inline-end: 1px solid var(--lime-color);
      border-radius: 0;
      background-color: rgba(255 255 255/.3);

      &:focus-visible {
         border: 2px solid var(--lime-color);
         outline: 3px solid var(--whitesmoke-color);
      }

      &:active {
         border: 2px solid var(--orange-color);
      }
   }

   option {
      @media (min-width:$tablet){
         font-size: toRem(17);
      }
      background-color: var(--whitesmoke-color);
   }
   }

</style>