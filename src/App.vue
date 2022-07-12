<template>
  <router-view />
  <homeBar />
</template>

<script setup lang="ts">
import homeBar from '@/components/homeBar.vue'

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
*{
  padding: 0;
  margin: 0;
}
</style>
