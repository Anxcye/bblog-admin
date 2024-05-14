<script setup>
import { useUserStore } from './stores'

const userStore = useUserStore()
console.log(userStore)
</script>

<template>
  <router-view />

  <div>app</div>
  <el-button @click="$router.push('/home')">home</el-button>
  <el-button @click="$router.push('/list')">list</el-button>

  <div>
    <h2>{{ userStore.token }}</h2>
    <el-button @click="userStore.setToken('asdfqwer')">log in</el-button>
    <el-button @click="userStore.removeToken()">log out</el-button>
  </div>
</template>

<style scoped></style>
