<script setup>
import { ref } from 'vue'
import UTabs from '@/components/UTabs.vue'

const tabs = [
{name: 'AboutUs', label: 'О нас'},
{name: 'Services', label: 'Наши услуги'},
{name: 'News', label: 'Новости'},
{name: 'Contacts', label: 'Контакты'}
]
const selectedTab = ref('Contacts')

const changeTab = (tabName) => {
   selectedTab.value = tabName
}
</script>

<template> 
   <UTabs
   :tabs="tabs"
   :selectedTab="selectedTab"
   @changeTab="changeTab"
   >
   <p v-if="selectedTab === 'AboutUs'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit sit, minima consequatur repellat cupiditate accusamus fugiat eos, beatae perferendis dignissimos rem quo iure quam ab expedita nemo, ratione illo? Veritatis, nisi amet a in repellendus recusandae nemo tempore beatae, dolorum eos voluptates distinctio optio non cum dolore dolor, aperiam unde inventore. Provident, quibusdam. A.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit sit, minima consequatur repellat cupiditate accusamus fugiat eos, beatae perferendis dignissimos rem quo iure quam ab expedita nemo, ratione illo? Veritatis, nisi amet a in repellendus recusandae nemo tempore beatae, dolorum eos voluptates distinctio optio non cum dolore dolor, aperiam unde inventore. Provident, quibusdam. A.</p>
   <p v-if="selectedTab === 'Services'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi rerum corporis vitae reprehenderit tempora, odit temporibus nostrum accusantium quisquam iusto laborum sed incidunt alias et minima tempore officia. Nesciunt nisi, repellat iste excepturi voluptas quae eaque repudiandae officia hic? Illo, iure! Numquam, exercitationem.</p>
   <p v-if="selectedTab === 'News'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat error commodi tempore facere. Amet minima neque error molestiae ex vero qui tenetur. Voluptatem nostrum ipsam nesciunt, dolorum in est fugit obcaecati illo.</p>
   <p v-if="selectedTab === 'Contacts'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id neque, sapiente perferendis pariatur ex omnis voluptate. Nobis asperiores expedita facilis aspernatur quo inventore ex, veritatis officia dolor rerum!</p>
   </UTabs>
</template>