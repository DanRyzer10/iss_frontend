<script setup>
// import RegForm from './components/RegForm.vue';
// import Navbar from './components/Navbar.vue';
//lazy load
import { defineAsyncComponent } from 'vue';
const RegForm = defineAsyncComponent(() => import('./components/RegForm.vue'));
const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'));
</script>
<template>
  <Navbar></Navbar>
  <main>
    <RegForm></RegForm>
  </main> 
</template>