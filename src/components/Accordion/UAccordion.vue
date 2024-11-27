<script setup>
import { ref } from 'vue';
import UTitlesAccordion from './UTitlesAccordion.vue';

    const data = [
       {
            id: 1,
            title: "Мужские",
            isOpen: false,
            subTitle: [
             {name: 'Взрослые', path: '/sneakers-man' },
            { name: 'Подростковые', path: '/sneakers-children' }
            ]
        },
	         {
            id: 2,
            title: "Женские",
            isOpen: false,
            subTitle: [
             {name: 'Взросл', path: '/sneakers-wooman' },
             {name: 'Подростк', path: '/sneakers-children-wooman' }
            ]
        },
        {
            id: 3,
           title: "Асессуары",
           isOpen: false,
           subTitle:[
             {name: 'Шнурки', path: '/laces-accessories' },
             {name: 'Стельки', path: '/insoles-accessories' }
            ]
       },
       {
          id: 4,
          title: "Уход",
          isOpen: false,
          subTitle: [
             {name: 'Крем / Спрей', path: '/Cream' }
            ]
        }
  ]

const titles = ref((data))

const toggleSubTitle = (id) => {
   titles.value = titles.value.map(title => title.isOpen && title.id !== id ? {...title, isOpen: false} : title)
   titles.value = titles.value.map(title => title.id === id ? {...title, isOpen: !title.isOpen} : title)
}
</script>

<template>
   <ul>
      <UTitlesAccordion 
         v-for="title in titles"
         :key="title.id"
         :id="title.id"
         :title="title.title"
         :sub-title="title.subTitle"
         :is-open="title.isOpen"
         @toggle-sub-title="toggleSubTitle"
         />
      </ul>
</template>

<style lang="scss" scoped>
</style>