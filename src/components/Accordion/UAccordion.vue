<script setup>
import { ref } from 'vue';
import UFaq from './UFaq.vue';

    const data = [
         {
            "id": 1,
            "title": "Мужские",
            "subtitle": "Взрослые",
            "subtitleTwo": "Подростковые",
            "isOpen": false
        },
        {
            "id": 2,
            "title": "Женские",
            "subtitle": "Взрослые",
            "subtitleTwo": "Подростковые",
            "isOpen": false
        },
        {
            "id": 3,
            "title": "Асессуары",
            "subtitle": "Шнурки",
            "isOpen": false
       },
       {
            "id": 4,
            "title": "Уход",
            "subtitle": "The capital of Australia",
            "isOpen": false
        }
  ]

const faqs = ref(data)

const toggleAnswer = (id) => {
        faqs.value = faqs.value.map(faq => faq.isOpen && faq.id !== id ? {...faq, isOpen: false} : faq)
        faqs.value = faqs.value.map(faq => faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq)
    }
</script>

<template>
   <ul class="accordion">
         <UFaq 
         v-for="faq in faqs"
         :key="faq.id"
         :faq="faq"
         @toggle-answer="toggleAnswer"
         />
      </ul>
</template>

<style lang="scss" scoped>
    .accordion{
        display: grid;
        row-gap: toRem(2);
   }
</style>