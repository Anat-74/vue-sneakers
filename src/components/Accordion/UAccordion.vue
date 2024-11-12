<script setup>
import { ref } from 'vue';
import UTitlesAccordion from './UTitlesAccordion.vue';

    const data = [
       {
            id: 1,
            title: "Мужские",
            isOpen: false,
            subTitle: [
             {name: 'Взрослые', href: '/sneakers-man' }, //path: '/sneakers-man'
             {name: 'Подростковые', href: '/sneakers-children' }
            ]
        },
	         {
            id: 2,
            title: "Женские",
            isOpen: false,
            subTitle: [
             {name: 'Взросл', href: '/sneakers-man' },
             {name: 'Подростк', href: '/sneakers-children' }
            ]
        },
        {
            id: 3,
           title: "Асессуары",
           isOpen: false,
           subTitle:[
             {name: 'Шнурки', href: '/sneakers-man' },
             {name: 'Стельки', href: '/sneakers-children' }
            ]
       },
       {
          id: 4,
          title: "Уход",
          isOpen: false,
          subTitle: [
             {name: 'Крем / Спрей', href: '/sneakers-man' }
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
         :subTitle="title.subTitle"
         :isOpen="title.isOpen"
         @toggle-sub-title="toggleSubTitle"
         />
      </ul>
</template>

<style lang="scss" scoped>
</style>