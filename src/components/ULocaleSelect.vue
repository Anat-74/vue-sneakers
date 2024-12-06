<script setup>
import { allLocales, setLocale } from "@/i18n/index";
</script>

<template>
   <label for="locale"></label>
   <select 
   @change="setLocale($event.target.value)"
   :value="$i18n.locale"
   id="locale"
   >
     <option 
     v-for="locale in allLocales"
     :key="locale"
     :value="locale"
     >
     {{ locale }}</option>
   </select>
 </template>
 
 <style scoped>
   select {
     height: 25px;
   }
 </style>
 