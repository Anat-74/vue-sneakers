<script setup>
defineProps({
   faq: {
      type: Object,
      required: true
   }
})

const emit = defineEmits(['toggleAnswer'])
const handleClick = (id) => emit('toggleAnswer', id)
</script>

<template>
           <li class="faq">
                <button @click="handleClick(faq.id)"
                  :class="['faq__btn', {faq__btn_open: faq.isOpen}]"
                  >{{faq.title}}
                    <font-awesome-icon  icon="fa-solid fa-chevron-right"/>
                </button>
            <div :class="['faq__subtitle', {faq__subtitle_open: faq.isOpen}]">
                 <span>{{faq.subtitle}}</span> <span>{{faq.subtitleTwo}}</span>
            </div>
        </li>
</template>

<style lang="scss" scoped>
   .faq {
      &__btn {
         @include adaptiveValue("font-size", 20, 18);
         display: flex;
         align-items: center;
         justify-content: space-between;
         width: 100%;
         padding-block: toEm(4, 20);
         margin-block-end: toRem(4);
         cursor: pointer;
         color: rgb(0 0 0 / .6);
         font-weight: 600;
         transition: transform .4s;
         svg {
            width: toRem(7);
            color: rgb(0 0 0 / .6);
            transition: transform .3s;
         }
         &_open {
            svg {
               transition: transform .3s;
               transform: rotate(90deg);
            }
         }

         @media (min-width:$tablet){
         padding-inline: toEm(8, 20);
         border: 1.4px solid var(--grey-color);
         border-radius: toEm(4, 20);
         }
      }

      &__subtitle {
         @include adaptiveValue("font-size", 18, 16);
         display: grid;
         row-gap: toRem(5);
         height: 0;
         overflow-y: scroll;
         background-color: transparent;
         font-weight: 500;
         transition: height .3s;

         &::-webkit-scrollbar{
             width: toRem(3);
         }
         &::-webkit-scrollbar-track{
             appearance: none;
             background-color: transparent;
         }
         &::-webkit-scrollbar-thumb{
             width: toRem(5);
             background-color: rgb(232, 210, 182);
             border-radius: toRem(50);
         }

         &_open {
            height: toRem(49);
            @media (min-width:$tablet){
            border: 1px solid var(--grey-color);
            border-radius: 0 0 toRem(4) toRem(4);
            border-top: none;
            }
         }
         span {
            display: inline-block;
            padding-inline: toRem(4);
         }
      }
   }
</style>