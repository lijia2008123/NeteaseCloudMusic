<template>
  <div class="main">
    <found v-show="useTabStore.activeKey === 'found'" />
    <mine v-show="useTabStore.activeKey === 'mine'" />
    <user v-show="useTabStore.activeKey === 'user'" />
  </div>

</template>
<script setup lang="ts">
import found from '@/components/home/found.vue'
import mine from '@/components/home/mine.vue'
import user from '@/components/home/user.vue'
import { tabStore } from '@/store/tab'

const useTabStore = tabStore()


</script>
