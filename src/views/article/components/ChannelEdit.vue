<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const open = (row) => {
  dialogVisible.value = true
  console.log(row)
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog title="编辑分类" v-model="dialogVisible" width="30%">
    <span>编辑分类</span>
  </el-dialog>
</template>
