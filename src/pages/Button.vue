<script setup>
import UButton from '@/components/UButton.vue'

const eventForButton = () => {
   alert('You clicked danger button')
}
</script>

<template>
   <ul class="list">
   <li>
      <h4>Disabled</h4>
      <UButton label="Primary" color="primary" disabled/>
      <UButton label="Secondary" color="second" disabled/>
   </li>
   <li>
      <h4>Colors</h4>
      <UButton label="Primary" color="primary"/>
      <UButton label="Secondary" color="second"/>
      <UButton label="Success" color="success"/>
      <UButton label="Info" color="info"/>
      <UButton label="Warning" color="warning"/>
      <UButton label="Danger" color="danger"/>
   </li>
   <li>
      <h4>Rounded</h4>
      <UButton label="Primary" color="primary" rounded/>
      <UButton label="Secondary" color="second" rounded/>
      <UButton label="Success" color="success" rounded/>
      <UButton label="Info" color="info" rounded/>
      <UButton label="Warning" color="warning" rounded/>
      <UButton label="Danger" color="danger" rounded/>
   </li>
   <li>
      <h4>Outlined</h4>
      <UButton label="Primary" color="primary" outlined/>
      <UButton label="Secondary" color="second" outlined/>
      <UButton label="Success" color="success" outlined/>
      <UButton label="Info" color="info" outlined/>
      <UButton label="Warning" color="warning" outlined/>
      <UButton label="Danger" color="danger" outlined/>
   </li>
   <li>
      <h4>Icon</h4>
      <UButton color="primary" icon="heart" outlined/>
      <UButton color="second" icon="hand"/>
      <UButton color="success" icon="address-book" outlined/>
      <UButton color="info" icon="credit-card"/>
      <UButton color="warning" icon="lemon" outlined/>
      <UButton color="danger" icon="hourglass"/>
   </li>
   <li>
      <h4>Close</h4>
      <UButton label="Close" color="primary" close/>
   </li>
   <li>
      <h4>Size</h4>
      <UButton label="Normal" color="primary"/>
      <UButton label="Large" color="primary" size="large"/>
   </li>
   <li>
      <h4>Event</h4>
      <UButton label="@click" color="danger" 
      @click="eventForButton"
      />
   </li>
</ul>
</template>