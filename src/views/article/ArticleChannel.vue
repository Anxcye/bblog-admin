<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { artGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'

const loading = ref(false)
const channelList = ref([])
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  console.log(channelList.value)
  loading.value = false
}
getChannelList()
const onEdit = (row) => {
  channelEdit.value.open(row)
}

const channelEdit = ref(null)
const onAddChannel = () => {
  channelEdit.value.open()
}
</script>
<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">新增分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="ID"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="Alias"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row, $index }">
          <el-button
            @click="onEdit(row, $index)"
            size="small"
            :icon="Edit"
            circle
            plain
            type="primary"
          ></el-button>
          <el-button
            circle
            plain
            type="danger"
            :icon="Delete"
            size="small"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
    </el-table>
    <channel-edit ref="channelEdit"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
