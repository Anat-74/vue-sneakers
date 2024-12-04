<script setup>
import UTitlesAccordion from './UTitlesAccordion.vue';
import { useI18n } from 'vue-i18n'

const {rt, tm, t, locale } = useI18n({
   useScope: 'global'
})

</script>

<template>
   <ul>
      <template
            v-for="accord in tm('accordion')"
            :key="accord.title">
           <h2> {{ rt(accord.title) }}</h2> 
             
            <router-link
            v-for="sub in accord.subTitle"
            :key="sub.name"
            :to="sub.path"
            >{{ rt(sub.name) }}
            </router-link>
         </template>
      </ul>
</template>

<style lang="scss" scoped>
</style>