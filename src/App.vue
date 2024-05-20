<script setup>
import { useUserStore } from './stores'

const userStore = useUserStore()
console.log(userStore)
</script>

<template>
  <router-view />
</template>

<style scoped></style>
