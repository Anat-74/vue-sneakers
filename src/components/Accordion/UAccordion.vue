<script setup>
import { ref } from 'vue';
import UTitlesAccordion from './UTitlesAccordion.vue';

    const data = [
       {
            id: 1,
            title: "Мужские",
            isOpen: false,
            subTitle: ["Вз., По."]
        },
	         {
            id: 2,
            title: "Женские",
            isOpen: false,
            subTitle: ["взрсл., подр."]
        },
        {
            id: 3,
           title: "Асессуары",
           isOpen: false,
            subTitle: ["взр., под."]
       },
       {
          id: 4,
          title: "Уход",
          isOpen: false,
         subTitle: ["в., п."]
        }
  ]

const titles = ref((data))

const toggleSubTitle = (id) => {
   titles.value = titles.value.map(title => title.isOpen && title.id !== id ? {...title, isOpen: false} : title)
   titles.value = titles.value.map(title => title.id === id ? {...title, isOpen: !title.isOpen} : title)
    }
</script>

<template>
   <ul class="accordion">
         <UTitlesAccordion 
         v-for="title in titles"
         :key="title.id"
         :id="title.id"
         :title="title.title"
         :subTitle="title.subTitle"
         :isOpen="title.isOpen"
         @toggle-sub-title="toggleSubTitle"
         />
      </ul>
</template>

<style lang="scss" scoped>
    .accordion {
        display: grid;
        row-gap: toRem(2);
   }
</style>