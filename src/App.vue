<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="nav">
    <NavBar/>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.nav {
  position: absolute;
  z-index: 100;
}
body {
  font-family: Arial sans-serif;
}
</style>
