<script setup>


import { ref, onMounted } from 'vue';
import Chips from 'primevue/chips';

import Dropdown from 'primevue/dropdown';

import InputText from 'primevue/inputtext';
import RegForm from './components/RegForm.vue';
import Navbar from './components/Navbar.vue';

// //define a method
// async function fetchData() {
//   const response = await fetch('http://localhost:8000/api/accounts')
//   const data = await response.json()
//   accounts.value = data
//   console.log(accounts.value)
// }

// onMounted(() => {
//   fetchData()
// })
// const created = () => {
//   fetchData()
// }
// created()
</script>

<template>
  <Navbar></Navbar>

  <main>
    <RegForm></RegForm>
    
  </main>

  
</template>

<style scoped>

</style>
